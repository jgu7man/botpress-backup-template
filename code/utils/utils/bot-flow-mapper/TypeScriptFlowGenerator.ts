import fs, { writeFileSync, mkdirSync } from "fs";
import path from "path";
import {
  BotData,
  Flow,
  Instruction,
  Node,
  Transition,
  TransitionEntry,
} from "./types";
import { sanitizeDirectoryName } from "./nameUtils";

export class TypeScriptFlowGenerator {
  private botData: BotData;

  constructor(botData: BotData) {
    this.botData = botData;
  }

  /**
   * Genera archivos TypeScript para todos los workflows
   */
  generateTypeScriptFlows(
    workflows: Flow[],
    outputDir: string
  ): void {
    console.log(`📁 TypeScript flow files generated in: ${outputDir}`);

    for (const workflow of workflows) {
      // Crear la carpeta del workflow si no existe
      const workflowDirName = sanitizeDirectoryName(workflow.name);
      const workflowDir = path.join(outputDir, workflowDirName);
      
      try {
        fs.mkdirSync(workflowDir, { recursive: true });
      } catch {
        // La carpeta ya existe, continuar
      }

      const fileName = `flow.ts`;
      const filePath = path.join(workflowDir, fileName);
      
      const content = this.generateWorkflowTypeScriptContent(workflow);
      fs.writeFileSync(filePath, content, "utf-8");
    }
  }

  /**
   * Genera un archivo TypeScript para un workflow específico
   */
  public generateWorkflowTypeScriptFile(flow: Flow, outputDir: string): void {
    const content = this.generateWorkflowTypeScriptContent(flow);

    const safeName = this.sanitizeName(flow.name);
    const fileName = `${flow.id}_${safeName}.flow.ts`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, content);
  }

  /**
   * Genera el contenido TypeScript para un workflow
   */
  private generateWorkflowTypeScriptContent(flow: Flow): string {
    const transitions = this.extractFlowTransitions(flow);
    return this.formatAsTypeScript(transitions, flow);
  }

  /**
   * Extrae todas las transiciones de un workflow
   */
  private extractFlowTransitions(flow: Flow): TransitionEntry[] {
    const transitions: TransitionEntry[] = [];

    for (const node of flow.nodes) {
      if (node.defaultTransition?.targetNodeId) {
        const targetNode = this.findNodeById(
          flow,
          node.defaultTransition.targetNodeId
        );
        transitions.push({
          fromNode: node.name,
          condition: "default",
          toNode: targetNode?.name || node.defaultTransition.targetNodeId,
        });
      }

      if (node.instructions) {
        for (const instruction of node.instructions) {
          const instructionTransitions = this.extractInstructionTransitions(
            instruction,
            node,
            flow
          );
          transitions.push(...instructionTransitions);
        }
      }
    }

    return transitions;
  }

  /**
   * Extrae transiciones de una instrucción específica
   */
  private extractInstructionTransitions(
    instruction: Instruction,
    fromNode: Node,
    flow: Flow
  ): TransitionEntry[] {
    const transitions: TransitionEntry[] = [];

    // Para instrucciones de tipo 'transition' con condición y destino directo
    if (instruction.type === 'transition' && (instruction as any).destination?.node) {
      const targetNode = this.findNodeById(flow, (instruction as any).destination.node);
      const condition = this.formatCondition(instruction as any);

      transitions.push({
        fromNode: fromNode.name,
        condition,
        toNode: targetNode?.name || (instruction as any).destination.node,
        instructionType: instruction.type,
        transitionLabel: (instruction as any).label
      });
    }

    // Para otras instrucciones que tienen array de transitions
    if (instruction.transitions) {
      for (const transition of instruction.transitions) {
        if (transition.destination?.node) {
          const targetNode = this.findNodeById(
            flow,
            transition.destination.node
          );
          const condition = this.formatCondition(transition);

          transitions.push({
            fromNode: fromNode.name,
            condition,
            toNode: targetNode?.name || transition.destination.node,
            instructionType: instruction.type,
            transitionLabel: transition.label,
          });
        }
      }
    }

    // Para instrucciones con destino directo (que no sean de tipo transition)
    if (instruction.type !== 'transition' && (instruction as any).destination?.node) {
      const targetNode = this.findNodeById(flow, (instruction as any).destination.node);
      transitions.push({
        fromNode: fromNode.name,
        condition: 'direct',
        toNode: targetNode?.name || (instruction as any).destination.node,
        instructionType: instruction.type
      });
    }

    return transitions;
  }

  /**
   * Formatea la condición de una transición
   */
  private formatCondition(transition: Transition): string {
    if (transition.condition?.payload) {
      let condition = transition.condition.payload;
      condition = condition.replace(/^\{\{/, "").replace(/\}\}$/, "");

      // No truncar condiciones importantes (workflow, user, conversation variables, __CLASS)
      if (condition.includes("__CLASS=") || 
          condition.includes("workflow.") || 
          condition.includes("user.") || 
          condition.includes("conversation.") ||
          condition.includes("lastNode=")) {
        return condition.trim();
      }

      // Solo truncar condiciones muy largas y complejas que no sean de las categorías anteriores
      if (condition.length > 80) {
        condition = condition.substring(0, 77) + "...";
      }

      return condition;
    }

    if (transition.label) {
      return transition.label;
    }

    return "true";
  }

  /**
   * Convierte las transiciones a código TypeScript simple
   */
  private formatAsTypeScript(
    transitions: TransitionEntry[],
    flow: Flow
  ): string {
    const nodeTransitions = this.groupTransitionsByFromNode(transitions);

    let content = this.generateFileHeader(flow);
    content += this.generateFlowLogic(nodeTransitions);

    return content;
  }

  /**
   * Genera el encabezado del archivo TypeScript
   */
  private generateFileHeader(flow: Flow): string {
    return `/**
 * Workflow: ${flow.name} (${flow.id})
 * Generated by Bot Flow Mapper
 * 
 * Start Node: ${flow.startNode}
 * Total Nodes: ${flow.nodes.length}
 */

`;
  }

  /**
   * Genera la lógica del flujo de forma simple y directa
   */
  private generateFlowLogic(
    nodeTransitions: Record<string, TransitionEntry[]>
  ): string {
    let content = `// Flujo de transiciones\n\n`;

    for (const [nodeName, transitions] of Object.entries(nodeTransitions)) {
      content += this.generateNodeLogic(nodeName, transitions);
      content += "\n";
    }

    return content;
  }

  /**
   * Genera la lógica para un nodo específico
   */
  private generateNodeLogic(
    nodeName: string,
    transitions: TransitionEntry[]
  ): string {
    let content = `// Nodo: ${nodeName}\n`;

    if (transitions.length === 1) {
      const transition = transitions[0];
      content += `// ${transition.condition} -> ${transition.toNode}\n`;
      content += `function ${this.camelCase(nodeName)}() {\n`;
      content += `  // ${transition.condition}\n`;
      content += `  return "${transition.toNode}";\n`;
      content += `}\n`;
    } else {
      content += `function ${this.camelCase(nodeName)}() {\n`;

      let hasDefault = false;
      let firstCondition = true;

      // Primero las condiciones normales
      for (const transition of transitions) {
        if (transition.condition === "default") {
          hasDefault = true;
          continue;
        }

        const conditionCode = this.generateSimpleCondition(transition.condition);
        const prefix = firstCondition ? "if" : "else if";
        firstCondition = false;

        content += `  ${prefix} (${conditionCode}) {\n`;
        content += `    // ${transition.condition} -> ${transition.toNode}\n`;
        content += `    return "${transition.toNode}";\n`;
        content += `  }\n`;
      }

      // Luego el default si existe
      if (hasDefault) {
        const defaultTransition = transitions.find(
          (t) => t.condition === "default"
        );
        if (defaultTransition) {
          content += `  else {\n`;
          content += `    // default -> ${defaultTransition.toNode}\n`;
          content += `    return "${defaultTransition.toNode}";\n`;
          content += `  }\n`;
        }
      } else if (!firstCondition) {
        content += `  else {\n`;
        content += `    throw new Error("No valid transition found");\n`;
        content += `  }\n`;
      }

      content += `}\n`;
    }

    return content;
  }

  /**
   * Genera una condición simple para if/else
   */
  private generateSimpleCondition(condition: string): string {
    // Si es una condición truncada, no la proceses
    if (condition.endsWith('...')) {
      return `${condition} === true`;
    }

    // Manejo de __CLASS (intent classification)
    if (condition.includes("__CLASS=")) {
      const match = condition.match(/__CLASS=([^&|\s]+)/);
      if (match) {
        const className = match[1].replace(/['"]/g, "");
        return `__CLASS === '${className}'`;
      }
    }

    // Manejo de lastNode
    if (condition.includes("lastNode=")) {
      const match = condition.match(/lastNode=([^&|\s]+)/);
      if (match) {
        const nodeId = match[1].replace(/['"]/g, "");
        return `lastNode === '${nodeId}'`;
      }
    }

    // Para condiciones complejas con operadores lógicos, procesar negaciones correctamente
    if (condition.includes(" || ") || condition.includes(" && ")) {
      let processedCondition = condition;
      
      // Convertir doble negación (!!variable) a variable === true
      processedCondition = processedCondition.replace(/!!(\w+(?:\.\w+)*)/g, '$1 === true');
      
      // Convertir negaciones simples (!variable) a variable === false
      processedCondition = processedCondition.replace(/!(\w+(?:\.\w+)*)/g, '$1 === false');
      
      return processedCondition;
    }

    // Para condiciones con doble negación
    if (condition.startsWith("!!")) {
      const variable = condition.substring(2);
      return `${variable} === true`;
    }

    // Para condiciones simples con negación
    if (condition.startsWith("!")) {
      const variable = condition.substring(1);
      return `${variable} === false`;
    }

    // Para condiciones positivas simples
    if (condition.includes(".") && !condition.includes("=")) {
      return `${condition} === true`;
    }

    // Default: usar la condición tal como está
    return condition;
  }

  /**
   * Agrupa las transiciones por nodo origen
   */
  private groupTransitionsByFromNode(
    transitions: TransitionEntry[]
  ): Record<string, TransitionEntry[]> {
    const grouped: Record<string, TransitionEntry[]> = {};

    for (const transition of transitions) {
      if (!grouped[transition.fromNode]) {
        grouped[transition.fromNode] = [];
      }
      grouped[transition.fromNode].push(transition);
    }

    return grouped;
  }

  /**
   * Utilidades de formateo
   */
  private camelCase(str: string): string {
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }

  private findNodeById(flow: Flow, nodeId: string): Node | undefined {
    return flow.nodes.find((node: Node) => node.id === nodeId);
  }

  private ensureOutputDir(outputDir: string): void {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  }

  private sanitizeName(name: string): string {
    return name
      .replace(/[^a-zA-Z0-9\-_\s]/g, "")
      .replace(/\s+/g, "_")
      .replace(/^_+|_+$/g, "")
      .substring(0, 50);
  }
}

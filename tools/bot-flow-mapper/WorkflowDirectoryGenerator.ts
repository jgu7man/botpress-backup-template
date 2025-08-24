import fs from "fs";
import path from "path";
import { TransitionFileGenerator } from "./TransitionFileGenerator";
import { BotData, Flow } from "./types";
import { sanitizeDirectoryName, sanitizeFilename } from "./nameUtils";

export class WorkflowDirectoryGenerator {
  private botData: BotData;
  private transitionGenerator: TransitionFileGenerator;

  constructor(botData: BotData) {
    this.botData = botData;
    this.transitionGenerator = new TransitionFileGenerator(botData);
  }

  /**
   * Genera directorios individuales para cada workflow
   */
  public generateWorkflowDirectories(outputDir: string): void {
    this.ensureOutputDir(outputDir);

    console.log(`📁 Creating workflow directories in: ${outputDir}`);

    for (const flow of this.botData.flows) {
      this.generateWorkflowDirectory(flow, outputDir);
    }

    console.log(
      `✅ Generated ${this.botData.flows.length} workflow directories`
    );
  }

  /**
   * Genera el directorio para un workflow específico
   */
  private generateWorkflowDirectory(flow: Flow, baseOutputDir: string): void {
    const workflowDirName = sanitizeDirectoryName(flow.name);
    const workflowDir = path.join(baseOutputDir, workflowDirName);

    // Crear directorio del workflow
    this.ensureOutputDir(workflowDir);

    // Generar archivo de transiciones
    this.generateTransitionFile(flow, workflowDir);

    // Generar archivo de información del workflow
    this.generateWorkflowInfoFile(flow, workflowDir);

    // Generar lista de nodos
    this.generateNodesListFile(flow, workflowDir);

    console.log(`📄 Generated directory: ${workflowDirName}`);
  }

  /**
   * Genera el archivo de transiciones para un workflow
   */
  private generateTransitionFile(flow: Flow, workflowDir: string): void {
    const transitions = this.transitionGenerator.extractFlowTransitions(flow);
    const filename = `wf-${flow.id}_${sanitizeFilename(
      flow.name
    )}.transitions.txt`;
    const filePath = path.join(workflowDir, filename);

    const content = this.formatTransitionsAsText(flow, transitions);
    fs.writeFileSync(filePath, content, "utf8");
  }

  /**
   * Genera archivo de información del workflow
   */
  private generateWorkflowInfoFile(flow: Flow, workflowDir: string): void {
    const filename = "workflow-info.md";
    const filePath = path.join(workflowDir, filename);

    let content = `# Workflow Information\n\n`;
    content += `**Name:** ${flow.name}\n`;
    content += `**ID:** ${flow.id}\n`;
    content += `**Start Node:** ${flow.startNode}\n`;
    content += `**Total Nodes:** ${flow.nodes.length}\n`;

    if (flow.parentFolder) {
      content += `**Parent Folder:** ${flow.parentFolder}\n`;
    }

    if (flow.variables && flow.variables.length > 0) {
      content += `**Variables:** ${flow.variables.length}\n`;
    }

    content += `\n## Nodes Overview\n\n`;

    const nodeTypes = flow.nodes.reduce(
      (acc: { [key: string]: number }, node) => {
        acc[node.type] = (acc[node.type] || 0) + 1;
        return acc;
      },
      {}
    );

    for (const [type, count] of Object.entries(nodeTypes)) {
      content += `- **${type}:** ${count} nodes\n`;
    }

    fs.writeFileSync(filePath, content, "utf8");
  }

  /**
   * Genera lista detallada de nodos
   */
  private generateNodesListFile(flow: Flow, workflowDir: string): void {
    const filename = "nodes-list.md";
    const filePath = path.join(workflowDir, filename);

    let content = `# Nodes List - ${flow.name}\n\n`;
    content += `Total nodes: ${flow.nodes.length}\n\n`;

    for (const node of flow.nodes) {
      content += `## ${node.name} (${node.id})\n\n`;
      content += `- **Type:** ${node.type}\n`;

      if (node.defaultTransition?.targetNodeId) {
        const targetNode = flow.nodes.find(
          (n) => n.id === node.defaultTransition?.targetNodeId
        );
        content += `- **Default Transition:** ${
          targetNode?.name || "Unknown"
        }\n`;
      }

      if (node.instructions && node.instructions.length > 0) {
        content += `- **Instructions:** ${node.instructions.length}\n`;
        for (const instruction of node.instructions) {
          content += `  - ${instruction.type}`;
          if (instruction.transitions && instruction.transitions.length > 0) {
            content += ` (${instruction.transitions.length} transitions)`;
          }
          content += `\n`;
        }
      }

      if (node.variables && node.variables.length > 0) {
        content += `- **Variables:** ${node.variables.join(", ")}\n`;
      }

      content += `\n`;
    }

    fs.writeFileSync(filePath, content, "utf8");
  }

  /**
   * Formatea las transiciones como texto legible
   */
  private formatTransitionsAsText(flow: Flow, transitions: any[]): string {
    let content = `# Transitions for Workflow: ${flow.name} (${flow.id})\n\n`;
    content += `Start Node: ${flow.startNode}\n`;
    content += `Total Nodes: ${flow.nodes.length}\n`;
    content += `Total Transitions: ${transitions.length}\n\n`;
    content +=
      "================================================================================\n\n";

    for (const transition of transitions) {
      let line = `${transition.fromNode} -> ${transition.condition} -> ${transition.toNode}`;

      if (
        transition.instructionType &&
        transition.instructionType !== "default"
      ) {
        line += ` [${transition.instructionType}]`;
      }

      if (
        transition.transitionLabel &&
        transition.transitionLabel !== transition.condition
      ) {
        line += ` "${transition.transitionLabel}"`;
      }

      content += line + "\n";
    }

    return content;
  }

  /**
   * Busca un workflow por su ID
   */
  public findFlowById(flowId: string): Flow | undefined {
    return this.botData.flows.find((f: Flow) => f.id === flowId);
  }

  /**
   * Asegura que el directorio existe
   */
  private ensureOutputDir(outputDir: string): void {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  }
}

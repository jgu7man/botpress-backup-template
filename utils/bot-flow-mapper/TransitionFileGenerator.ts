import fs from "fs";
import path from "path";
import {
  BotData,
  Flow,
  Instruction,
  Node,
  Transition,
  TransitionEntry,
} from "./types";

export class TransitionFileGenerator {
  private botData: BotData;

  constructor(botData: BotData) {
    this.botData = botData;
  }

  public generateAllTransitionFiles(outputDir: string): void {
    this.ensureOutputDir(outputDir);

    for (const flow of this.botData.flows) {
      this.generateWorkflowTransitionFile(flow, outputDir);
    }

    console.log(`📁 Transition files generated in: ${outputDir}`);
  }

  public generateWorkflowTransitionFile(flow: Flow, outputDir: string): void {
    const transitions = this.extractFlowTransitions(flow);
    const content = this.formatTransitionsAsText(transitions, flow);

    const safeName = this.sanitizeName(flow.name);
    const fileName = `${flow.id}_${safeName}.transitions.txt`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, content);
  }

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

  private extractInstructionTransitions(
    instruction: Instruction,
    fromNode: Node,
    flow: Flow
  ): TransitionEntry[] {
    const transitions: TransitionEntry[] = [];

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

    if ((instruction as any).destination?.node) {
      const targetNode = this.findNodeById(
        flow,
        (instruction as any).destination.node
      );
      transitions.push({
        fromNode: fromNode.name,
        condition: "direct",
        toNode: targetNode?.name || (instruction as any).destination.node,
        instructionType: instruction.type,
      });
    }

    return transitions;
  }

  private formatCondition(transition: Transition): string {
    if (transition.condition?.payload) {
      let condition = transition.condition.payload;
      condition = condition.replace(/^\{\{/, "").replace(/\}\}$/, "");

      if (condition.length > 50) {
        condition = condition.substring(0, 47) + "...";
      }

      return `{{${condition}}}`;
    }

    if (transition.label) {
      return transition.label;
    }

    return "true";
  }

  private formatTransitionsAsText(
    transitions: TransitionEntry[],
    flow: Flow
  ): string {
    let content = `# Transitions for Workflow: ${flow.name} (${flow.id})\n\n`;
    content += `Start Node: ${flow.startNode}\n`;
    content += `Total Nodes: ${flow.nodes.length}\n`;
    content += `Total Transitions: ${transitions.length}\n\n`;
    content += "=".repeat(80) + "\n\n";

    if (transitions.length === 0) {
      content += "No transitions found in this workflow.\n";
      return content;
    }

    for (const transition of transitions) {
      let line = `${transition.fromNode} -> ${transition.condition} -> ${transition.toNode}`;

      if (
        transition.instructionType &&
        transition.instructionType !== "transition"
      ) {
        line += ` [${transition.instructionType}]`;
      }

      if (
        transition.transitionLabel &&
        transition.transitionLabel !== transition.condition
      ) {
        line += ` "${transition.transitionLabel}"`;
      }

      content += `${line}\n`;
    }

    return content;
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
      .substring(0, 50);
  }
}

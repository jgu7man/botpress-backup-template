import { FlowMap, TransitionAnalysis } from "./types.js";

export class FlowVisualizer {
  /**
   * Genera un reporte en texto plano del análisis de transiciones
   */
  public generateTextReport(analysis: TransitionAnalysis): string {
    let report = "";

    report += this.generateHeader(analysis);
    report += this.generateFlowSummaries(analysis.flowMaps);
    report += this.generateIssuesReport(analysis);

    return report;
  }

  /**
   * Genera un reporte en formato Markdown
   */
  public generateMarkdownReport(analysis: TransitionAnalysis): string {
    let report = "";

    report += "# Bot Flow Analysis Report\n\n";
    report += this.generateMarkdownHeader(analysis);
    report += this.generateMarkdownFlowSummaries(analysis.flowMaps);
    report += this.generateMarkdownIssuesReport(analysis);

    return report;
  }

  /**
   * Genera un diagrama en formato Mermaid
   */
  public generateMermaidDiagram(flowMap: FlowMap): string {
    let diagram = `flowchart TD\n`;
    diagram += `    %% Flow: ${flowMap.flowName} (${flowMap.flowId})\n\n`;

    // Nodo de inicio
    diagram += `    ${this.sanitizeNodeId(flowMap.startNode)}[["🚀 START: ${
      flowMap.startNode
    }"]]\n`;

    // Todos los nodos y sus conexiones
    for (const nodeConnection of flowMap.nodeConnections) {
      const fromNodeId = this.sanitizeNodeId(nodeConnection.fromNodeId);
      const nodeTypeIcon = this.getNodeTypeIcon(nodeConnection.fromNodeType);

      // Definir el nodo origen si no es el start
      if (nodeConnection.fromNodeId !== flowMap.startNode) {
        diagram += `    ${fromNodeId}["${nodeTypeIcon} ${nodeConnection.fromNodeName}"]\n`;
      }

      // Agregar conexiones
      for (const connection of nodeConnection.connections) {
        const toNodeId = this.sanitizeNodeId(connection.toNodeId);
        const style = this.getConnectionStyle(connection.connectionType);

        diagram += `    ${fromNodeId} ${style} ${toNodeId}\n`;

        // Definir nodo destino si es necesario
        if (
          !flowMap.nodeConnections.find(
            (nc) => nc.fromNodeId === connection.toNodeId
          )
        ) {
          const targetNodeIcon = this.getNodeTypeIcon("unknown");
          diagram += `    ${toNodeId}["${targetNodeIcon} ${connection.toNodeName}"]\n`;
        }
      }
    }

    // Estilos
    diagram += "\n    %% Styles\n";
    diagram += "    classDef startNode fill:#e1f5fe\n";
    diagram += "    classDef endNode fill:#ffebee\n";
    diagram += "    classDef standardNode fill:#f3e5f5\n";
    diagram += "    classDef entryNode fill:#e8f5e8\n";

    return diagram;
  }

  /**
   * Genera un reporte JSON estructurado
   */
  public generateJSONReport(analysis: TransitionAnalysis): string {
    return JSON.stringify(analysis, null, 2);
  }

  private generateHeader(analysis: TransitionAnalysis): string {
    let header = "=".repeat(60) + "\n";
    header += "                BOT FLOW ANALYSIS REPORT\n";
    header += "=".repeat(60) + "\n\n";
    header += `Total Flows: ${analysis.totalFlows}\n`;
    header += `Total Nodes: ${analysis.totalNodes}\n`;
    header += `Total Connections: ${analysis.totalConnections}\n`;
    header += `Orphan Nodes: ${analysis.orphanNodes.length}\n`;
    header += `Dead End Nodes: ${analysis.deadEndNodes.length}\n\n`;

    return header;
  }

  private generateMarkdownHeader(analysis: TransitionAnalysis): string {
    let header = "## Summary\n\n";
    header += `- **Total Flows:** ${analysis.totalFlows}\n`;
    header += `- **Total Nodes:** ${analysis.totalNodes}\n`;
    header += `- **Total Connections:** ${analysis.totalConnections}\n`;
    header += `- **Orphan Nodes:** ${analysis.orphanNodes.length}\n`;
    header += `- **Dead End Nodes:** ${analysis.deadEndNodes.length}\n\n`;

    return header;
  }

  private generateFlowSummaries(flowMaps: FlowMap[]): string {
    let summary = "FLOW SUMMARIES\n";
    summary += "-".repeat(60) + "\n\n";

    for (const flowMap of flowMaps) {
      summary += `Flow: ${flowMap.flowName} (${flowMap.flowId})\n`;
      summary += `  Start Node: ${flowMap.startNode}\n`;
      summary += `  Total Nodes: ${flowMap.totalNodes}\n`;
      summary += `  Node Connections: ${flowMap.nodeConnections.length}\n`;
      summary += `  Total Connections: ${flowMap.nodeConnections.reduce(
        (acc, nc) => acc + nc.connections.length,
        0
      )}\n\n`;

      // Mostrar conexiones principales
      for (const nodeConnection of flowMap.nodeConnections.slice(0, 5)) {
        summary += `    ${nodeConnection.fromNodeName} (${nodeConnection.fromNodeType})\n`;
        for (const connection of nodeConnection.connections) {
          const type =
            connection.connectionType === "default" ? "DEFAULT" : "CONDITIONAL";
          const label = connection.label ? ` [${connection.label}]` : "";
          summary += `      -> ${connection.toNodeName} (${type}${label})\n`;
        }
      }

      if (flowMap.nodeConnections.length > 5) {
        summary += `    ... and ${
          flowMap.nodeConnections.length - 5
        } more nodes\n`;
      }

      summary += "\n";
    }

    return summary;
  }

  private generateMarkdownFlowSummaries(flowMaps: FlowMap[]): string {
    let summary = "## Flow Details\n\n";

    for (const flowMap of flowMaps) {
      summary += `### ${flowMap.flowName}\n\n`;
      summary += `- **Flow ID:** \`${flowMap.flowId}\`\n`;
      summary += `- **Start Node:** \`${flowMap.startNode}\`\n`;
      summary += `- **Total Nodes:** ${flowMap.totalNodes}\n`;
      summary += `- **Node Connections:** ${flowMap.nodeConnections.length}\n`;
      summary += `- **Total Connections:** ${flowMap.nodeConnections.reduce(
        (acc, nc) => acc + nc.connections.length,
        0
      )}\n\n`;

      if (flowMap.nodeConnections.length > 0) {
        summary += "#### Connection Overview\n\n";

        for (const nodeConnection of flowMap.nodeConnections.slice(0, 10)) {
          summary += `- **${nodeConnection.fromNodeName}** (\`${nodeConnection.fromNodeType}\`)\n`;
          for (const connection of nodeConnection.connections) {
            const type = connection.connectionType === "default" ? "🔄" : "🔀";
            const label = connection.label ? ` - *${connection.label}*` : "";
            summary += `  ${type} → **${connection.toNodeName}**${label}\n`;
          }
        }

        if (flowMap.nodeConnections.length > 10) {
          summary += `\n*... and ${
            flowMap.nodeConnections.length - 10
          } more connections*\n`;
        }
      }

      summary += "\n---\n\n";
    }

    return summary;
  }

  private generateIssuesReport(analysis: TransitionAnalysis): string {
    let issues = "ISSUES FOUND\n";
    issues += "-".repeat(60) + "\n\n";

    if (analysis.orphanNodes.length > 0) {
      issues += "ORPHAN NODES (No incoming connections):\n";
      for (const orphan of analysis.orphanNodes) {
        issues += `  - ${orphan.nodeName} (${orphan.nodeId}) in flow ${orphan.flowId}\n`;
        issues += `    Reason: ${orphan.reason}\n`;
      }
      issues += "\n";
    }

    if (analysis.deadEndNodes.length > 0) {
      issues += "DEAD END NODES (No outgoing connections):\n";
      for (const deadEnd of analysis.deadEndNodes) {
        issues += `  - ${deadEnd.nodeName} (${deadEnd.nodeId}) in flow ${deadEnd.flowId}\n`;
        issues += `    Type: ${deadEnd.nodeType}\n`;
      }
      issues += "\n";
    }

    if (
      analysis.orphanNodes.length === 0 &&
      analysis.deadEndNodes.length === 0
    ) {
      issues += "No issues found! 🎉\n\n";
    }

    return issues;
  }

  private generateMarkdownIssuesReport(analysis: TransitionAnalysis): string {
    let issues = "## Issues Found\n\n";

    if (analysis.orphanNodes.length > 0) {
      issues += "### 🚨 Orphan Nodes (No incoming connections)\n\n";
      for (const orphan of analysis.orphanNodes) {
        issues += `- **${orphan.nodeName}** (\`${orphan.nodeId}\`) in flow \`${orphan.flowId}\`\n`;
        issues += `  - *Reason: ${orphan.reason}*\n`;
      }
      issues += "\n";
    }

    if (analysis.deadEndNodes.length > 0) {
      issues += "### ⚠️ Dead End Nodes (No outgoing connections)\n\n";
      for (const deadEnd of analysis.deadEndNodes) {
        issues += `- **${deadEnd.nodeName}** (\`${deadEnd.nodeId}\`) in flow \`${deadEnd.flowId}\`\n`;
        issues += `  - *Type: ${deadEnd.nodeType}*\n`;
      }
      issues += "\n";
    }

    if (
      analysis.orphanNodes.length === 0 &&
      analysis.deadEndNodes.length === 0
    ) {
      issues += "### ✅ No issues found!\n\n";
      issues += "All nodes have proper connections. Great job! 🎉\n\n";
    }

    return issues;
  }

  private sanitizeNodeId(nodeId: string): string {
    // Limpia el ID del nodo para uso en Mermaid
    return nodeId.replace(/[^a-zA-Z0-9]/g, "_");
  }

  private getNodeTypeIcon(nodeType: string): string {
    const icons: Record<string, string> = {
      "start": "🚀",
      "entry": "🚪",
      "exit": "🚪",
      "end": "🏁",
      "standard": "⚙️",
      "trigger": "⚡",
      "comment": "💬",
      "exception-handler": "🛠️",
      "unknown": "❓",
    };

    return icons[nodeType] || icons["unknown"];
  }

  private getConnectionLabel(connection: any): string {
    if (connection.label) return connection.label;
    if (connection.condition) return connection.condition;
    if (connection.connectionType === "default") return "default";
    return "";
  }

  private getConnectionStyle(connectionType: string): string {
    return connectionType === "default" ? "-->" : "-.->";
  }
}

import {
  BotData,
  Connection,
  DeadEndNode,
  Flow,
  FlowMap,
  Instruction,
  Node,
  NodeConnection,
  OrphanNode,
  TransitionAnalysis,
} from "./types.js";

export class BotFlowMapper {
  private botData: BotData;

  constructor(botData: BotData) {
    this.botData = botData;
  }

  /**
   * Analiza todas las transiciones del bot y devuelve un mapeo completo
   */
  public analyzeTransitions(): TransitionAnalysis {
    const flowMaps: FlowMap[] = [];
    let totalConnections = 0;
    const orphanNodes: OrphanNode[] = [];
    const deadEndNodes: DeadEndNode[] = [];

    for (const flow of this.botData.flows) {
      const flowMap = this.mapFlowTransitions(flow);
      flowMaps.push(flowMap);

      totalConnections += flowMap.nodeConnections.reduce(
        (acc, nc) => acc + nc.connections.length,
        0
      );

      // Detectar nodos huérfanos y sin salida
      const flowOrphans = this.findOrphanNodes(flow);
      const flowDeadEnds = this.findDeadEndNodes(flow);

      orphanNodes.push(...flowOrphans);
      deadEndNodes.push(...flowDeadEnds);
    }

    return {
      flowMaps,
      totalFlows: this.botData.flows.length,
      totalNodes: this.botData.flows.reduce(
        (acc, flow) => acc + flow.nodes.length,
        0
      ),
      totalConnections,
      orphanNodes,
      deadEndNodes,
    };
  }

  /**
   * Mapea las transiciones de un flujo específico
   */
  public mapFlowTransitions(flow: Flow): FlowMap {
    const nodeConnections: NodeConnection[] = [];

    for (const node of flow.nodes) {
      const connections = this.extractNodeConnections(node, flow);

      if (connections.length > 0) {
        nodeConnections.push({
          fromNodeId: node.id,
          fromNodeName: node.name,
          fromNodeType: node.type,
          connections,
        });
      }
    }

    return {
      flowId: flow.id,
      flowName: flow.name,
      startNode: flow.startNode,
      nodeConnections,
      totalNodes: flow.nodes.length,
    };
  }

  /**
   * Extrae todas las conexiones de un nodo específico
   */
  private extractNodeConnections(node: Node, flow: Flow): Connection[] {
    const connections: Connection[] = [];

    // Conexión por defecto
    if (node.defaultTransition?.targetNodeId) {
      const targetNode = this.findNodeById(
        flow,
        node.defaultTransition.targetNodeId
      );
      connections.push({
        toNodeId: node.defaultTransition.targetNodeId,
        toNodeName: targetNode?.name || "Unknown",
        connectionType: "default",
      });
    }

    // Conexiones en instrucciones
    if (node.instructions) {
      for (const instruction of node.instructions) {
        const instructionConnections = this.extractInstructionConnections(
          instruction,
          flow
        );
        connections.push(...instructionConnections);
      }
    }

    return connections;
  }

  /**
   * Extrae conexiones de una instrucción específica
   */
  private extractInstructionConnections(
    instruction: Instruction,
    flow: Flow
  ): Connection[] {
    const connections: Connection[] = [];

    // Transiciones dentro de la instrucción
    if (instruction.transitions) {
      for (const transition of instruction.transitions) {
        if (transition.destination?.node) {
          const targetNode = this.findNodeById(
            flow,
            transition.destination.node
          );
          connections.push({
            toNodeId: transition.destination.node,
            toNodeName: targetNode?.name || "Unknown",
            connectionType: "conditional",
            label: transition.label,
            condition: transition.condition?.payload,
            instructionType: instruction.type,
            instructionId: instruction.id,
          });
        }
      }
    }

    // Conexión de destino directa en la instrucción
    if (instruction.destination?.node) {
      const targetNode = this.findNodeById(flow, instruction.destination.node);
      connections.push({
        toNodeId: instruction.destination.node,
        toNodeName: targetNode?.name || "Unknown",
        connectionType: "conditional",
        instructionType: instruction.type,
        instructionId: instruction.id,
      });
    }

    return connections;
  }

  /**
   * Encuentra nodos huérfanos (que no tienen conexiones entrantes excepto el startNode)
   */
  private findOrphanNodes(flow: Flow): OrphanNode[] {
    const orphanNodes: OrphanNode[] = [];
    const referencedNodes = new Set<string>();

    // Agregar el nodo de inicio
    referencedNodes.add(flow.startNode);

    // Recopilar todos los nodos referenciados
    for (const node of flow.nodes) {
      // Default transitions
      if (node.defaultTransition?.targetNodeId) {
        referencedNodes.add(node.defaultTransition.targetNodeId);
      }

      // Instruction transitions
      if (node.instructions) {
        for (const instruction of node.instructions) {
          if (instruction.transitions) {
            for (const transition of instruction.transitions) {
              if (transition.destination?.node) {
                referencedNodes.add(transition.destination.node);
              }
            }
          }
          if (instruction.destination?.node) {
            referencedNodes.add(instruction.destination.node);
          }
        }
      }
    }

    // Encontrar nodos no referenciados
    for (const node of flow.nodes) {
      if (!referencedNodes.has(node.id) && node.id !== flow.startNode) {
        orphanNodes.push({
          flowId: flow.id,
          nodeId: node.id,
          nodeName: node.name,
          reason: "No incoming connections",
        });
      }
    }

    return orphanNodes;
  }

  /**
   * Encuentra nodos sin salida (dead ends)
   */
  private findDeadEndNodes(flow: Flow): DeadEndNode[] {
    const deadEndNodes: DeadEndNode[] = [];

    for (const node of flow.nodes) {
      const hasOutgoingConnections = this.hasOutgoingConnections(node);

      // Los nodos tipo 'end' y 'exit' son naturalmente dead ends
      if (
        !hasOutgoingConnections &&
        node.type !== "end" &&
        node.type !== "exit"
      ) {
        deadEndNodes.push({
          flowId: flow.id,
          nodeId: node.id,
          nodeName: node.name,
          nodeType: node.type,
        });
      }
    }

    return deadEndNodes;
  }

  /**
   * Verifica si un nodo tiene conexiones salientes
   */
  private hasOutgoingConnections(node: Node): boolean {
    // Verificar default transition
    if (node.defaultTransition?.targetNodeId) {
      return true;
    }

    // Verificar transitions en instrucciones
    if (node.instructions) {
      for (const instruction of node.instructions) {
        if (instruction.transitions && instruction.transitions.length > 0) {
          return true;
        }
        if (instruction.destination?.node) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Busca un nodo por ID en un flujo
   */
  private findNodeById(flow: Flow, nodeId: string): Node | undefined {
    return flow.nodes.find((node) => node.id === nodeId);
  }

  /**
   * Obtiene estadísticas de un flujo específico
   */
  public getFlowStats(flowId: string): any {
    const flow = this.botData.flows.find((f) => f.id === flowId);
    if (!flow) return null;

    const flowMap = this.mapFlowTransitions(flow);
    const orphans = this.findOrphanNodes(flow);
    const deadEnds = this.findDeadEndNodes(flow);

    return {
      flowId: flow.id,
      flowName: flow.name,
      totalNodes: flow.nodes.length,
      totalConnections: flowMap.nodeConnections.reduce(
        (acc, nc) => acc + nc.connections.length,
        0
      ),
      orphanNodes: orphans.length,
      deadEndNodes: deadEnds.length,
      nodeTypes: this.getNodeTypeDistribution(flow),
      instructionTypes: this.getInstructionTypeDistribution(flow),
    };
  }

  /**
   * Obtiene la distribución de tipos de nodos
   */
  private getNodeTypeDistribution(flow: Flow): Record<string, number> {
    const distribution: Record<string, number> = {};

    for (const node of flow.nodes) {
      distribution[node.type] = (distribution[node.type] || 0) + 1;
    }

    return distribution;
  }

  /**
   * Obtiene la distribución de tipos de instrucciones
   */
  private getInstructionTypeDistribution(flow: Flow): Record<string, number> {
    const distribution: Record<string, number> = {};

    for (const node of flow.nodes) {
      if (node.instructions) {
        for (const instruction of node.instructions) {
          distribution[instruction.type] =
            (distribution[instruction.type] || 0) + 1;
        }
      }
    }

    return distribution;
  }
}

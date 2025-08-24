export interface BotData {
  flows: Flow[];
}

export interface Flow {
  id: string;
  name: string;
  startNode: string;
  nodes: Node[];
  variables?: Variable[];
  links?: any[];
  parentFolder?: string;
}

export interface Node {
  id: string;
  name: string;
  type: string;
  instructions?: Instruction[];
  defaultTransition?: DefaultTransition;
  x?: number;
  y?: number;
  deletable?: boolean;
  variables?: string[];
}

export interface Instruction {
  id?: string;
  type: string;
  transitions?: Transition[];
  nodeId?: string;
  [key: string]: any;
}

export interface Transition {
  id: string;
  type: string;
  label?: string;
  condition?: {
    type: string;
    payload: string;
  };
  destination: {
    node: string;
  };
  generative?: any;
}

export interface DefaultTransition {
  targetNodeId: string | null;
}

export interface Variable {
  id: string;
  name: string;
  type: string;
  description?: string;
  scope: string;
  defaultValue?: any;
}

export interface TransitionEntry {
  fromNode: string;
  condition: string;
  toNode: string;
  instructionType?: string;
  transitionLabel?: string;
}

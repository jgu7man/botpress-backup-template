export interface Hooks {
  id: string;
  name: string;
  hookType: string;
  content: string;
  title: string;
  description: string;
  origin: Origin;
}

export interface Origin {
  type: string;
  integration: Integration;
}

export interface Integration {
  id: string;
  name: string;
  version: string;
}

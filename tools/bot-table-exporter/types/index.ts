export interface TableInfo {
  id: string;
  name: string;
  factor: number;
  frozen: boolean;
  tags: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  isComputeEnabled: boolean;
  schema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
    additionalProperties: boolean;
  };
  parentFolder: string;
  selectors: any[];
  metadata?: {
    columns: Array<{
      index: number;
      width: number;
      hidden?: boolean;
    }>;
  };
}

export interface TableRecord {
  computed: Record<string, any>;
  stale: any[];
  id: number;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export interface MenuOption {
  id: string;
  name: string;
  description: string;
}

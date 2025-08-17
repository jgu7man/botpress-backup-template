/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Table {
  id: string;
  name: string;
  factor: number;
  frozen: boolean;
  tags: TableTags;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: any;
  isComputeEnabled: boolean;
  schema: TableSchema;
  parentFolder: string;
  selectors: undefined[];
}

export type TableTags = Record<string, string[]>;

export interface TableSchema {
  type: string;
  "x-zui": XZui;
  properties: Record<string, TableProperty>;
  additionalProperties: boolean;
}

export interface TableProperty {
  type: string;
  "x-zui": XZui;
  nullable: boolean;
  description: string;
}

export interface XZui {
  index?: number;
  searchable?: boolean;
}

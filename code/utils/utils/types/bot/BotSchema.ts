/* eslint-disable @typescript-eslint/no-explicit-any */

export interface BotSchemas {
  name: string;
  schema: Schema;
  code: string;
  typings: string;
  id: string;
}

export interface Schema {
  type: string;
  properties: Properties;
  required: string[];
  additionalProperties: boolean;
  "x-zui": any;
}

export type Properties = Record<string, PropertyType>;

export interface PropertyType {
  type: string;
  "x-zui": any;
}

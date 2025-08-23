// This file is part of Botpress.
export class BotpressTableDefaults<TableRecord> {
  ["#"]: string;
  ["CREATED_AT"]: Date;
  ["UPDATED_AT"]: Date;

  findRecords: (args: FindRecordsParams<TableRecord>) => Promise<any>;
  createRecord: (
    payload: Partial<Omit<TableRecord, "id" | "createdAt" | "updatedAt">>
  ) => Promise<TableRecord>;
  createRecords: (
    payload: Partial<Omit<TableRecord, "id" | "createdAt" | "updatedAt">>[]
  ) => Promise<TableRecord[]>;
  updateRecord: (
    recordId: number,
    payload: Partial<Omit<TableRecord, "id" | "createdAt" | "updatedAt">>
  ) => Promise<TableRecord>;
  updateRecords: (
    keyColumnId: keyof TableRecord,
    records: Partial<TableRecord>[]
  ) => Promise<void>;
  deleteRecord: (recordId: number) => Promise<void>;
  deleteRecords: (recordIds: number[]) => Promise<void>;
  getRecord: (recordId: number) => Promise<TableRecord>;
}

export abstract class FindRecordsParams<TableRecord> {
  offset?: number | undefined;
  limit?: number | undefined;
  search?: string | undefined;
  orderBy?: string;
  orderDirection?: "asc" | "desc";
  group?: Partial<Record<keyof TableRecord, any>> | GroupOperators | undefined;
  filter?: Partial<Record<keyof TableRecord, any>> | AIQuery | undefined;
}

type AIQuery = {
  type: "AIQuery";
  template: string;
  params: any[];
  types: string[];
};

type GroupOperators = "key" | "avg" | "max" | "min" | "sum" | "count";

// Interfaz genérica para operaciones de tabla
export interface TableOperations<T = any> {
  findRecords(params?: {
    filter?: any;
    sort?: any;
    maxRecords?: number;
  }): Promise<T[]>;
  createRecord(data: Partial<T>): Promise<T>;
  updateRecord(id: string, data: Partial<T>): Promise<T>;
  deleteRecord(id: string): Promise<void>;
  findFirst(params?: { filter?: any; sort?: any }): Promise<T | null>;
}

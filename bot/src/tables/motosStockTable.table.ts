// motosStockTable.table.ts
export interface motosStockTable {
  
  url: string | null;
  
  price: number | null;
  
  style: string | null;
  
  imagen: string | null;
  
  reference: string | null;
  /** precio con cupo brilla */
  brillaPrice: number | null;
  
  referenciaCompetencia: string | null;
}
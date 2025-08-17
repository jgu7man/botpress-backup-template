import { leadClientsTable } from "@tables/leadClientsTable.table";

export type leadClientsTableRecord = Omit<
  leadClientsTable,
  "updatedAt" | "createdAt" | "id"
>;

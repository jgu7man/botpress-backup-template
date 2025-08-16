export interface Knowledge_base {
  dataSources: DataSources[];
  description: string;
  id: string;
  name: string;
  parentFolder: string;
}

export interface DataSources {
  created_on: number;
  data: Data;
  disabled: boolean;
  id: string;
  type: string;
}

export interface Data {
  dataTableId: string;
  excludedColumnIds: undefined[];
}

import {
  DatePropertyValue,
  FormulaPropertyValue,
  MultiSelectPropertyValue,
  NumberFormulaResult,
  NumberPropertyValue,
  PhoneNumberPropertyValue,
  RelationPropertyValue,
  StatusPropertyValue,
  TitlePropertyValue,
  UrlPropertyValue,
} from "./notion-property-values.types";

export interface NotionCreatePageResponse {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Created_by;
  last_edited_by: Last_edited_by;
  cover?: any;
  icon?: any;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: ConversationProperties;
  url: string;
  public_url?: any;
  developer_survey: string;
  request_id: string;
}

export interface Created_by {
  object: string;
  id: string;
}

export interface Last_edited_by {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface ConversationProperties {
  "Momento de envío"?: DatePropertyValue;
  "Éxito estimado"?: NumberFormulaResult;
  "Conversation"?: StatusPropertyValue;
  "url"?: UrlPropertyValue;
  "Bugs"?: FormulaPropertyValue;
  "Teléfono del cliente"?: RelationPropertyValue;
  "Teléfono"?: PhoneNumberPropertyValue;
  "Issues"?: RelationPropertyValue;
  "Anzuelo"?: StatusPropertyValue;
  "Row"?: NumberPropertyValue;
  "Éxito de datos"?: FormulaPropertyValue;
  "Inputs"?: MultiSelectPropertyValue;
  "ID de conversación"?: TitlePropertyValue;
  "Última actualización"?: DatePropertyValue;
}

export type AnzueloStatus =
  | "No enviado"
  | "Enviado"
  | "Entregado"
  | "Leído"
  | "Detener promociones"
  | "Contestado";
export type ConversationStatus =
  | "No iniciada"
  | "En progreso"
  | "Con Issues"
  | "Con bugs"
  | "Exitosa";

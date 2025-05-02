// leadClientsTable.table.ts
export interface leadClientsTable {
  /** cedula del cliente */
  CEDULA: string | null;
  
  NOMBRE: string;
  
  ESTATUS: string | null;
  
  RESUMEN: string | null;
  
  TELEFONO: string | null;
  
  REPORTADO: string | null;
  
  ASISTENCIA: string | null;
  
  CONCLUSION: string | null;
  
  ROL_DE_CLIENTE: string | null;
  
  CONVERSATION_ID: string;
  
  TIPO_DE_CONTRATO: string | null;
  
  NUMERO_DE_FACTURA: string | null;
  
  PERFIL_CREDITICIO: string | null;
  
  PRODUCTO_DE_INTERES: string | null;
  
  PREFERENCIA_DE_COMPRA: string | null;
  
  UBICACION_DEL_USUARIO: string | null;
  
  UBICACION_DE_SERVICIO: string | null;
}
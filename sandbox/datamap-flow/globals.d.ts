// export interface DataMapFlowWorkflow {
//   formStatus: FormStatus;
// }

export declare global {
  const FormDefinitionTable: BotpressTableDefaults<FieldDefinition>;
  // const workflow: DataMapFlowWorkflow;
  const conversation: {
    formStatus?: FormStatus;
  };
}

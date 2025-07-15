// Workflow: EvaluateAskingUserData - wf-45eae1291b
class EvaluateAskingUserDataState {
  /** Marca que indica que se debe consultar los datos del cliente */
  requireAskUserData: boolean;
}

export const workflow = new EvaluateAskingUserDataState();
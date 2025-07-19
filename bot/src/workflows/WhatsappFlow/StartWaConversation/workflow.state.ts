// Workflow: StartWaConversation - wf-3b416ba254
class StartWaConversationState {
  /** Sin descripción */
  messageSentResult: Record<string, unknown>;
  /** Webhook received values are valid */
  whValid: boolean;
  /** Sin descripción */
  whTemplateName: string;
  /** Sin descripción */
  whPhone: string;
  /** Sin descripción */
  whTemplateVariables: string;
  /** 💾 saveUserData */
  '💾 saveUserData': any;
}

export const workflow = new StartWaConversationState();
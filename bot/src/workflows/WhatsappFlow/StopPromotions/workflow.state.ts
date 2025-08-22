// Workflow: StopPromotions - wf-259e297ca2
class StopPromotionsState {
  /** Valor que indica que se debe detener promociones */
  stopPromotions: boolean;
  /** La frase configurada para detener promociones */
  triggerKey: string;
  /** 🄽 NotionClient  */
  '🄽 NotionClient ': any;
  /** farewell1 */
  farewell1: any;
}

export const workflow = new StopPromotionsState();
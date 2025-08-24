import { ConversationActionsHistory } from "../schemas/ConversationActionsHistory";

export class botVariables {
  /** [var-e76a72e7be] */
  conversationContext: string;
  /**
  * [var-ca1b9daae5]
  * @description The list of conversations from the bot 
  */
  conversationActions: ConversationActionsHistory[];
  /** [var-1fe026fdd8] */
  clarificationAttempts: number;
  /**
  * [var-abde0d6af8]
  * @description state of bot when get a answer from user 
  */
  irregularState: string;
}

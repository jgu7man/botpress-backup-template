// Workflow: Conversation End - wf-conversation-end
class Conversation_EndState {
  /** Sin descripción */
  inputError: string;
  /** To set the bot state: 'COMPLEXED', 'CONFUSED', 'WRONG', 'TIMEOUT' */
  botState: string;
  /** Sin descripción */
  colombiaTime: string;
  /** saveUserData1 */
  saveUserData1: any;
}

export const workflow = new Conversation_EndState();
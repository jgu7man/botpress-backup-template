import { BotpressEvent } from "@core-types/event.type";
import { botVariables } from "@variables/botVariables";
import { conversationVariables } from "@variables/conversationVariables";
import { userVariables } from "@variables/userVariables";
export const bot = new botVariables();
export const user = new userVariables();
export const conversation = new conversationVariables();
export const event = new BotpressEvent();

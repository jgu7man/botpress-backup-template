import { BotpressEvent } from "@core-types/event.type";
import { MainConversation } from "@core-types/MainConversation";
import { Turn } from "@core-types/Turn";
import { botVariables } from "@variables/botVariables";
import { userVariables } from "@variables/userVariables";

export const bot = new botVariables();
export const user = new userVariables();
export const conversation = new MainConversation();
export const event = new BotpressEvent();
export const turn = new Turn();

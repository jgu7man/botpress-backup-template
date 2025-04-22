import { Bot } from "../../types/interfaces/bot.type";
import { Conversation } from "../../types/interfaces/conversation.type";
import { BotpressEvent } from "../../types/interfaces/event.type";
import { User } from "../../types/interfaces/user.type";

export const bot = new Bot();

export const user = new User();

export const event = new BotpressEvent();

export const conversation = new Conversation();

// Node: Answer - nd-d4d38c1d17
import { bot } from "@main";
// ------------------ EXECUTE CODE -------------------------
// Reset Input State When Bot is in Irregular State

if (bot.irregularState) {
    bot.irregularState = ''
}

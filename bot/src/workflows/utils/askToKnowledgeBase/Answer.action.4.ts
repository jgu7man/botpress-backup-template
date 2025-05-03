import { bot } from "@main";
// Node: Answer - nd-d4d38c1d17
// Reset Input State When Bot is in Irregular State - ins-a5cc612ad7

// ------------------ EXECUTE CODE -------------------------

if (bot.irregularState) {
    bot.irregularState = ''
}

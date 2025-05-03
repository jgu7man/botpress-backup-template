import { bot } from "@main";
import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// Node: Entry - nd-96a14bb62e
// "Manage Bot State and Current Time in Colombia" - ins-7816ee7c57

// ------------------ EXECUTE CODE -------------------------

const { DateTime } = luxon
const CurrentTime = DateTime.now().setZone('America/Bogota').toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = CurrentTime

// -----

const { botState } = workflow;
console.log(`🤖 botState:`, botState);
console.log(`🤖 1 irregularState:`, bot.irregularState);

// Revisamos si el flujo proviene de una pregunta de oferta de ayuda
if (bot.irregularState === "ATTENDED") {
  bot.irregularState = "SERVED";
} else if (botState) {
  bot.irregularState = botState;
}

console.log(`🤖 2 irregularState:`, bot.irregularState);

// Si no existe estado, significa que debemos ofrecer ayuda
if (!bot.irregularState) {
  bot.irregularState = "ATTENDED";
}

console.log(`🤖 3 irregularState:`, bot.irregularState);

import { conversation } from "@main";
import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// Node: SetTimeoutMessage - nd-127dcfa177
// "Set Current Time in Colombia for Workflow" - ins-335c219652

// ------------------ EXECUTE CODE -------------------------

const { DateTime } = luxon


const currentTime = DateTime.now().setZone('America/Bogota').toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

conversation.conversationEnding = 'TIMEOUT'

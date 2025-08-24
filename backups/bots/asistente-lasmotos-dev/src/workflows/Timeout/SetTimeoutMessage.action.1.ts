import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// Node: SetTimeoutMessage - nd-127dcfa177
// Set Current Time for Colombia in Workflow Variables - ins-335c219652

export {};

// ------------------ EXECUTE CODE -------------------------

const { DateTime } = luxon


const currentTime = DateTime.now().setZone('America/Bogota').toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

user.conversationEnding = 'TIMEOUT'

import { user } from "@main";
import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// ------------------ EXECUTE CODE -------------------------
// Set Current Time for Colombia in Workflow Variables

const { DateTime } = luxon


const currentTime = DateTime.now().setZone('America/Bogota').toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

user.conversationEnding = 'TIMEOUT'

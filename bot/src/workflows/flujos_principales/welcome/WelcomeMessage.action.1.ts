// Node: WelcomeMessage - nd-766ed57e70
import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// ------------------ EXECUTE CODE -------------------------
// Consultar la hora de Colombia

const { DateTime } = luxon
const currentTime = DateTime.now()
    .setZone('America/Bogota')
    .toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

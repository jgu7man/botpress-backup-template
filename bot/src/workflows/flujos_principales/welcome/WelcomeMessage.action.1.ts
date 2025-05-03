import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// Node: WelcomeMessage - nd-766ed57e70
// Consultar la hora de Colombia - ins-0fe0db2807

// ------------------ EXECUTE CODE -------------------------

const { DateTime } = luxon
const currentTime = DateTime.now()
    .setZone('America/Bogota')
    .toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

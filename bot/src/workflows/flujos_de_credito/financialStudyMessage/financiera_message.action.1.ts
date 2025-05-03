import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// Node: financiera_message - nd-45f911b1da
// Set Current Time in Colombia Using Luxon Library - ins-eb7966928a

// ------------------ EXECUTE CODE -------------------------

const { DateTime } = luxon
const currentTime = DateTime.now()
    .setZone('America/Bogota')
    .toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

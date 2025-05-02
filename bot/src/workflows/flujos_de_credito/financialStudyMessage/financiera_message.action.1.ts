import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// ------------------ EXECUTE CODE -------------------------
// Set Current Time in Colombia Using Luxon Library

const { DateTime } = luxon
const currentTime = DateTime.now()
    .setZone('America/Bogota')
    .toLocaleString(DateTime.TIME_SIMPLE)

workflow.colombiaTime = currentTime

import { workflow } from "./workflow.state";
// Node: ValidateSkipStep - nd-e1d01d900d
// No Requiere preguntar datos - ins-dc03e843e7

// ------------------ TRANSITION CONDITION -------------------------

const insdc03e843e7 = !!workflow.skipUserDataReason;
// Destination: nd-2e90e42efa

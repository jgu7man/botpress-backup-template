// main.ts

import { welcomeSchema } from "../../types/schemas/welcome.schema";
import { generateDocs } from "../../utils/generateDocs";
import { validateVarsInTemplate } from "../../utils/validateTemplateVars";
import { welcomePrompt } from "./welcome.prompt";

class Main {}

export const workflow = new Main();

//  run ts-node workflows/main/welcome.state.ts to validate the used variables
validateVarsInTemplate(welcomePrompt, welcomeSchema);
generateDocs();

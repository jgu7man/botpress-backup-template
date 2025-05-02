import { NonSensitiveData } from "../schemas/NonSensitiveData";
import { SensitiveData } from "../schemas/SensitiveData";

export class conversationVariables {

  /** The sensitive data to save on Lead_Clients_Table */
  sensitiveData?: SensitiveData /* schema */;
  nonSensitiveData?: NonSensitiveData /* schema */;
}

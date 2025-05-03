import { NonSensitiveData } from "../schemas/NonSensitiveData";
import { SensitiveData } from "../schemas/SensitiveData";

export class conversationVariables {
  /**
  * [var-8d66e81332]
  * @description The sensitive data to save on Lead_Clients_Table 
  */
  sensitiveData?: SensitiveData;
  /** [var-68a8c7281f] */
  nonSensitiveData?: NonSensitiveData;
}

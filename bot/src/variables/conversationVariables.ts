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
  /** [var-b1e8b342fd] */
  retryAttempts?: number;
  /**
  * [var-354a3c444f]
  * @description La categorización de la finalización de la conversación. Puede ser:  'COMPLEXED',  'WRONG', 'SERVED', 'TIMEDOUT' 
  */
  conversationEnding?: string;
}

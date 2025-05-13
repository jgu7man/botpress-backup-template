import { NonSensitiveData } from "../schemas/NonSensitiveData";
import { SensitiveData } from "../schemas/SensitiveData";

export class conversationVariables {
  /**
  * [var-8d66e81332]
  * @description The sensitive data to save on Lead_Clients_Table 
  */
  sensitiveData: SensitiveData;
  /** [var-68a8c7281f] */
  nonSensitiveData: NonSensitiveData;
  /**
  * [var-354a3c444f]
  * @description La categorización de la finalización de la conversación. Puede ser:  'COMPLEXED',  'WRONG', 'SERVED', 'TIMEDOUT' 
  */
  conversationEnding: string;
  /**
  * [var-55f85cc88f]
  * @description Temas que se han manejado en la conversación 
  */
  topics: string[];
  /**
  * [var-372b1dc48c]
  * @description variable que controla cuando se debe contactar al usuario 
  */
  status: string;
}

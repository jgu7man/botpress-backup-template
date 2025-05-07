import { AuthorizedPop } from "../schemas/AuthorizedPop";
import { CreditUserInfo } from "../schemas/CreditUserInfo";
import { ProductInfoSchema } from "../schemas/ProductInfoSchema";

export class userVariables {
  /**
  * [var-a0df57cac0]
  * @description descripcion de motivo de contacto 
  */
  description: string;
  /**
  * [var-f7c2b3bc2a]
  * @description telefono del cliente que contacta 
  */
  phone: string;
  /** [var-f4f0ed016f] */
  popAuthorized: boolean;
  /**
  * [var-83dcd249ff]
  * @description variable que te dice si ya se ha preguntado por autorizacion antes 
  */
  askedBefore: boolean;
  /**
  * [var-9369e3e179]
  * @description location of client 
  */
  location: string;
  /**
  * [var-dd5aaebf64]
  * @description The user's full name on file 
  */
  fullName: string;
  /** [var-cf5951486e] */
  assistanceMode: string;
  /** [var-747d14fb18] */
  clientRole: string;
  /** [var-ce96b9d7c1] */
  nationalID: string;
  /** [var-2ab8508338] */
  brillaBillNumber: string;
  /** [var-17ae7daec2] */
  serviceLocation: string;
  /** [var-25c7be938a] */
  interestedProduct: ProductInfoSchema;
  /** [var-6866d10040] */
  outOfServiceRange: boolean;
  /** [var-69ce231c6d] */
  creditInfo: CreditUserInfo;
  /** [var-8dfc5e82fb] */
  creditProfile: string;
  /** [var-9574419fe7] */
  purchasePreference: string;
  /** [var-294547d0a0] */
  jobContractType: string;
  /** [var-fa90fc97e1] */
  phoneInvalid: boolean;
  /** [var-1b5209edbb] */
  negativeCreditReport: string;
  /**
  * [var-372b1dc48c]
  * @description variable que controla cuando se debe contactar al usuario 
  */
  conversationStatus: string;
  /**
  * [var-2946efe2f3]
  * @description Información de que el cliente autorizó o rechazó el guardado de sus datos. 
  */
  authorizedPop: AuthorizedPop;
}

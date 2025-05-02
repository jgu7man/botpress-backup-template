import { CreditUserInfo } from "../schemas/CreditUserInfo";
import { ProductInfoSchema } from "../schemas/ProductInfoSchema";

export class userVariables {

  /** descripcion de motivo de contacto */
  description?: string;
  /** telefono del cliente que contacta */
  phone?: string;
  popAuthorized?: boolean;
  /** variable que te dice si ya se ha preguntado por autorizacion antes */
  askedBefore?: boolean;
  /** location of client */
  location?: string;
  /** The user's full name on file */
  fullName?: string;
  assistanceMode?: string;
  clientRole?: string;
  nationalID?: string;
  brillaBillNumber?: string;
  /** La categorización de la finalización de la conversación. Puede ser:  'COMPLEXED',  'WRONG', 'SERVED', 'TIMEDOUT' */
  conversationEnding?: string;
  serviceLocation?: string;
  interestedProduct?: ProductInfoSchema /* schema */;
  outOfServiceRange?: boolean;
  creditInfo?: CreditUserInfo /* schema */;
  creditProfile?: string;
  purchasePreference?: string;
  jobContractType?: string;
  phoneInvalid?: boolean;
  negativeCreditReport?: string;
  /** variable que controla cuando se debe contactar al usuario */
  conversationStatus?: string;
}


export class botVariables {
  /**
  * [var-abde0d6af8]
  * @description state of bot when get a answer from user 
  */
  irregularState: string;
  /**
  * [var-f2c8a4be4e]
  * @description Datos analizados del último intent del cliente 
  */
  extractedData: string;
  /**
  * [var-0770371c91]
  * @description Una versión interpretada del último intent del cliente por parte del bot 
  */
  kbIntentInterpretation: string;
  /** [var-b1e8b342fd] */
  retryAttempts: number;
  /**
  * [var-e76a72e7be]
  * @description El nombre de la variable que se espera capturar por la IA 
  */
  expectedData: string;
  /**
  * [var-3261ad1899]
  * @description La última pregunta que hizo a cliente 
  */
  lastQuestionMade: string;
}

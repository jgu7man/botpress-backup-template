/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-25651dffcc]
* @name FlowState
* @typings: 
*/
export interface FlowState {
  ending: string;
  topics: any[];
  status: string;
  context: string;
  state: string;
}

export const FlowStateSchema = z.object({
  ending: z
    .enum(['COMPLEXED', 'WRONG', 'SERVED', 'TIMEDOUT', 'HOOKED', ''])
    .describe(
      "La categorización de la finalización de la conversación. Puede ser: 'COMPLEXED', 'WRONG', 'SERVED', 'TIMEDOUT', 'HOOKED'"
    ),

  topics: z.array(z.string()).describe('Temas que se han manejado en la conversación'),

  status: z
    .enum([
      'STARTED',
      'BOT_ATTENTION',
      'CREDIT_INTERESTED',
      'STORE_ATTENTION',
      'CREDIORBE_ATTENTION',
      'BANCO_BOGOTA_ATTENTION',
      'ATTENTION_REJECTED',
      'PRE_EVALUATION_STARTED',
      'PENDING_CALL',
      'COLD_PROSPECT',
      ''
    ])
    .describe('Variable que controla el nivel de calidad de la conversación'),

  context: z
    .enum(['ABOUT_LOCATION_INFO', 'ABOUT_MOTO_INFO', 'ABOUT_CREDIT_INFO', 'ABOUT_CUPO_BRILLA_INFO',
    'PRE_ENGAGEMENT', ''])
    .describe('El contexto del cual se habla en la conversación'),

  state: z
    .enum(['', 'COMPLEXED', 'SERVED', 'WAITING', 'CONFUSED', 'ATTENTION_REQUESTED', 'FINISHED', 'TIMEOUT', 'STOP_PROMOTIONS'])
    .describe('State of bot when get a answer from user')
})

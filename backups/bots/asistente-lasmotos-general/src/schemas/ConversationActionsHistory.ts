/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-9c46068a9d]
* @name ConversationActionsHistory
* @typings: 
*/
export interface ConversationActionsHistory {
  lastUpdate: string;
  key: string;
}

export const ConversationActionsHistorySchema = z.object({
  lastUpdate: z.date(),
  key: z.enum([
	"DEFINE_USER_CREDIT_PROFILE",
	"DEFINE_REFFERED_FINANCIAL",
	"ASK_NEGATIVE_CREDIT_REPORT_STATUS",
	"ASK_ASSISTANCE_PREFERENCE",
	"ASK_USER_SERVICE_LOCATION",
	"GOT_USER_SERVICE_LOCATION",
	"GOT_INTERESTED_PRODUCT",
	"ASK_USER_INTERESTED_PRODUCT",
	"ASK_USER_NAME",
	"ASK_USER_PHONE",
	"ASK_USER_LOCATION",
	"ASK_USER_NATIONAL_ID",
	"ASK_USER_BRILLA_INFO_NUMBER",
	"ASK_USER_POP_AUTHORIZATION",
	"UPDATE_CLIENT_LEVEL"
])
})
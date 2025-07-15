import { user, event, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: SendMessage - nd-852a227ee4
// "User Data Initialization for Pre-Engagement Workflow" - ins-00a2e88f7c

// ------------------ EXECUTE CODE -------------------------

conversation.flow = {
  ending: '',
  topics: ['PRE_ENGAGEMENT'],
  status: 'COLD_PROSPECT',
  state: '',
  context: 'PRE_ENGAGEMENT'
}

const { name, phone } = event.payload.body
user.phone = phone

if (name) {
  user.fullName = name
}

workflow.whValid = !!phone
console.log('✅ workflow valid: ', workflow.whValid)

workflow.whTemplateVariables = env.WAB_ALLOW_VARIABLES ? JSON.stringify([name]) : ''
console.log('⭕️ workflow.whTemplateVariables:', workflow.whTemplateVariables)

import { workflow } from "./workflow.state";
// Node: SendMessage - nd-852a227ee4
// "User Data Processing for Pre-Engagement Workflow" - ins-00a2e88f7c

export {};

// ------------------ EXECUTE CODE -------------------------

conversation.flow = {
  ending: 'HOOKED',
  topics: ['PRE_ENGAGEMENT'],
  status: 'COLD_PROSPECT',
  state: '',
  context: 'PRE_ENGAGEMENT'
}

console.log(event.payload.body)
const { name, phone } = event.payload.body
user.phone = phone

if (name) {
  user.fullName = name
}

workflow.whValid = !!phone
console.log('✅ workflow valid: ', workflow.whValid)

workflow.whTemplateVariables = env.WAB_ALLOW_VARIABLES ? JSON.stringify([name]) : ''
console.log('⭕️ workflow.whTemplateVariables:', workflow.whTemplateVariables)
console.log(phone)

if ( env.WAB_TEMPLATE == 'leads_cupo_brilla' ) {
  user.creditProfile = 'CUPO_BRILLA'
}

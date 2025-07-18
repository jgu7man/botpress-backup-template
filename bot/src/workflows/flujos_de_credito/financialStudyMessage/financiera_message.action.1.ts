import { workflow } from "./workflow.state";
// Node: financiera_message - nd-45f911b1da
// "Fetch Financial Entity Link Based on Identifier" - ins-2c8ee12e0a

// ------------------ EXECUTE CODE -------------------------

console.log('⭕️', workflow.financialEntity)

const searchResult = await EntiedadesFinancierasTable.findRecords({
  filter: { Identificador: workflow.financialEntity }
})

console.log('⭕️', searchResult)

if (searchResult.length) {
  workflow.financialLink = searchResult[0].Enlace
} else {
  workflow.financialLink = 'https://slm.bancodebogota.com/mctn45s5'
}

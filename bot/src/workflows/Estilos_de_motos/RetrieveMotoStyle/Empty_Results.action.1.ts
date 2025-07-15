import { workflow } from "./workflow.state";
// Node: Empty_Results - nd-6fa6fc7a95
// "Manage and Update Style Options in Workflow" - ins-1f316506e8

// ------------------ EXECUTE CODE -------------------------

const { styleOptionList = [] } = workflow

console.log('🤖 styleOptionList', workflow.styleOptionList)

if (styleOptionList.length < 1) {
  workflow.styleOptionList = [
    'Deportiva',
    'De trabajo',
    'Automática',
    'Doble propósito',
    'Motocarro',
    'Semiautomática',
    'Urbana',
    'Alta Gama',
    'Todo terreno'
  ]
}

const index = workflow.styleOptionList.indexOf(workflow.interpretedStyle)
if (index > -1) {
  workflow.styleOptionList.splice(index, 1) // Remove the value at the found index
} else {
  console.error(`Option "${workflow.interpretedStyle}" not found in the list.`)
}


workflow.stlyeMenuOfferMessage = 'Disculpe el inconveninete. Parece que ahora no cuento con la información para mostrarte resultados. ¿Me haría el favor de elegir otro estilo?'

workflow.retried = true

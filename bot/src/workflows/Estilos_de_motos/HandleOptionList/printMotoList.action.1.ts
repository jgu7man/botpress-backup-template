import { workflow } from "./workflow.state";
// Node: printMotoList - nd-c320217d8e
// "Extract and Format Current Motorcycle Details for Workflow" - ins-54bd98b07b

// ------------------ EXECUTE CODE -------------------------

const currentMoto = workflow.motoList[workflow.count]
console.log('🤖 currentMoto', currentMoto)

workflow.details = {
  reference: currentMoto.reference.toUpperCase() ?? '',
  image: currentMoto.image ?? '',
  link: currentMoto.link ?? '',
  price: currentMoto.price ?? 0,
  brillaPrice: currentMoto.brillaPrice ?? 0,
  cashPrice: currentMoto.cashPrice ?? 0
}

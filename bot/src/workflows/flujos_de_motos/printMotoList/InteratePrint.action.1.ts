import { workflow } from "./workflow.state";
// Node: InteratePrint - nd-30b53e2f30
// "Extract and Format Current Motorcycle Details for Workflow" - ins-e3b07296e3

// ------------------ EXECUTE CODE -------------------------

const currentMoto = workflow.motoList[workflow.count];

workflow.details = {
  reference: currentMoto.reference.toUpperCase() ?? "",
  image: currentMoto.image ?? "",
  link: currentMoto.link ?? "",
  price: currentMoto.price ?? 0,
  brillaPrice: currentMoto.brillaPrice ?? 0,
  cashPrice: currentMoto.cashPrice ?? 0,
};

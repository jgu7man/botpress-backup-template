import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Extract and Format Current Motorcycle Details for Workflow"

const currentMoto = workflow.motoList[workflow.count];

workflow.details = {
  reference: currentMoto.reference.toUpperCase() ?? "",
  image: currentMoto.image ?? "",
  link: currentMoto.link ?? "",
  price: currentMoto.price ?? 0,
  brillaPrice: currentMoto.brillaPrice ?? 0,
  cashPrice: currentMoto.cashPrice ?? 0,
};

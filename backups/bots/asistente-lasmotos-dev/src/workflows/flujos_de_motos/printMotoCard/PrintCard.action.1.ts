import { workflow } from "./workflow.state";
// Node: PrintCard - nd-985cd4339e
// "Extract and Assign Product Details to Workflow Object" - ins-847e26b302

export {};

// ------------------ EXECUTE CODE -------------------------

// project/scripts_v0/workflows/motos/print-moto-card/workflow.state.ts

// Extrae la propiedad 'productSource' del objeto 'workflow'.
const { productSource } = workflow;
// Imprime el valor de 'productSource' en la consola para depuración.
console.log(`🤖  productSource:`, productSource);

// Extrae la propiedad 'interestedProduct' del objeto 'user'.
const { interestedProduct } = user;
// Imprime el valor de 'interestedProduct' en la consola para depuración.
console.log(`🤖  interestedProduct:`, interestedProduct);

// Calcula el precio 'cupoBrillaPrice'.
// Si 'productSource' tiene la propiedad 'brillaPrice', se usa ese valor.
// Si no, se verifica si 'interestedProduct' tiene 'brillaPrice', y se usa ese valor.
// Si ninguno tiene 'brillaPrice', se asigna 0 como valor predeterminado.
const cupoBrillaPrice =
  productSource?.brillaPrice ?? interestedProduct.brillaPrice ?? 0;

// Calcula el precio 'regularPrice' de manera similar a 'cupoBrillaPrice'.
// Si 'productSource' tiene la propiedad 'price', se usa ese valor.
// Si no, se verifica si 'interestedProduct' tiene 'price', y se usa ese valor.
// Si ninguno tiene 'price', se asigna 0 como valor predeterminado.
const regularPrice = productSource?.price ?? interestedProduct.price ?? 0;

// Asigna un título al objeto 'workflow'.
// Si 'productSource' tiene la propiedad 'reference', se usa ese valor.
// Si no, se verifica si 'interestedProduct' tiene 'reference', y se usa ese valor.
// Si ninguno tiene 'reference', se asigna una cadena vacía como valor predeterminado.
workflow.title = productSource?.reference ?? interestedProduct.reference ?? "";

// Asigna una URL de imagen al objeto 'workflow'.
// Si 'productSource' tiene la propiedad 'image', se usa ese valor.
// Si no, se verifica si 'interestedProduct' tiene 'image', y se usa ese valor.
// Si ninguno tiene 'image', se asigna una cadena vacía como valor predeterminado.
workflow.imageURL = productSource?.image ?? interestedProduct.image ?? "";

// Asigna una URL de detalles al objeto 'workflow'.
// Si 'productSource' tiene la propiedad 'link', se usa ese valor.
// Si no, se verifica si 'interestedProduct' tiene 'link', y se usa ese valor.
// Si ninguno tiene 'link', se asigna una cadena vacía como valor predeterminado.
if (typeof productSource?.link !== "string") {
  console.log(`🤖 typeof productSource?.link:`, typeof productSource?.link);
  workflow.detailsURL = interestedProduct.link ?? "";
} else {
  console.log(`🤖 productSource?.link:`, productSource?.link);
  workflow.detailsURL = productSource?.link ?? "";
}

// Asigna un precio.
// Verifica si la propiedad 'creditProfile' del objeto 'user' es igual a "CUPO_BRILLA".
// Si es verdadero, se usa el valor de 'cupoBrillaPrice'.
// Si es falso, se usa el valor de 'regularPrice'.
// Esto determina si se aplica un precio especial para usuarios con "CUPO_BRILLA".
workflow.price =
  user.creditProfile === "CUPO_BRILLA" ? cupoBrillaPrice : regularPrice;
	
console.log(`🤖 workflow:`, workflow);

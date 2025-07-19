import { workflow } from "./workflow.state";
// Node: makeQuestion - nd-819a322482
// Assign asked before as true - ins-5f0b36cb72

export {};

// ------------------ EXECUTE CODE -------------------------

// Verificar si el usuario ya fue autorizado previamente
console.log(`🤖 user.authorizedPop:`, user.authorizedPop);
// Establecer el estado de autorización del usuario
user.authorizedPop = {askedBefore: true, answer: ''}
console.log( `🤖 user.authorizedPop:`, user.authorizedPop );

// Verificar el tipo de confirmación actual
console.log(`🤖 workflow.getConfirmation.confirmationType:`, workflow.GetConfirmation.confirmationType);
// Guardar el tipo de confirmación como respuesta interpretada
workflow.interpretedAnswer = workflow.GetConfirmation.confirmationType
console.log(`🤖 workflow.interpratedAnswer:`, workflow.interpretedAnswer);

if (workflow.interpretedAnswer === 'ACCEPTED' || workflow.interpretedAnswer === 'REJECTED') {
    user.authorizedPop.answer = workflow.interpretedAnswer
}

import { event } from "@main";
import { workflow } from "./workflow.state";
// Node: evaluateMultimediaMessage - nd-18463ec851
// Log Event Payload  - ins-c655cfce0b

// ------------------ EXECUTE CODE -------------------------

// EVALUAR EL TIPO DE MENSAJE RECIBIDO

// Mapa de identificadores de medios
const mediaTypes = {
  AUDIO: "(Audio)",
  IMAGE: "(Image)",
  VIDEO: "(Video)",
  FILE: "(File)",
};

// Determinar el tipo de mensaje recibido
const startMessageType = extractMessageType() || "TEXT";

console.log(`🤖  workflow.startMessageType:`, startMessageType);

// Mapa de advertencias
const advicesMap = {
  AUDIO:
    "Discúlpame, por el momento no puedo escuchar audios. ¿Me podrías escribir por favor?",
  IMAGE:
    "Discúlpame, por el momento no puedo entender imágenes. ¿Me podrías escribir por favor?",
  VIDEO:
    "Discúlpame, por el momento no puedo ver videos. ¿Me podrías escribir por favor?",
  FILE: "Discúlpame, por el momento no puedo recibir archivos. ¿Me podrías escribir por favor?",
};

// Enviar mensaje de advertencia
if (startMessageType !== "TEXT") {
  if (startMessageType !== "TEXT") {
    // @ts-ignore - Sabemos que startMessageType es una clave válida
    workflow.excusingMessage = advicesMap[startMessageType] || "";
  }
}

function extractMessageType(): string {
  return Object.entries(mediaTypes).find(([key, value]) =>
    event.preview.includes(value)
  )?.[0] as string;
}
// Ejemplos de contenido recibido

// {"audioUrl":"https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=547813380919690&ext=1739940310&hash=ATsMDnTMW3zzmxkJtm23985cHfb_aAlf2xbppOZT8-LegA"}
// console.log(`🤖 Event payload: ${JSON.stringify(event.payload)}`)

// (Audio) https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=547813380919690&ext=1739940310&hash=ATsMDnTMW3zzmxkJtm23985cHfb_aAlf2xbppOZT8-LegA
// console.log(`🤖 Event preview: ${event.preview}`)

/**
 * 🎯 OVERRIDE GLOBAL EVENT TYPE
 *
 * Este archivo redefine específicamente el tipo 'event' global
 * para que Botpress use BotpressEvent en lugar de DOM Event
 */

import type { BotpressEvent } from "./event.type";

declare global {
  // ✅ Redefine 'event' para que sea BotpressEvent
  const event: BotpressEvent;

  // ✅ También definimos _event como backup
  const _event: BotpressEvent;
}

export {};

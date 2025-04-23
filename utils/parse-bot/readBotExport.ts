import fs from "fs";
import path from "path";
import { BotExport } from "../../types/bot/BotExport";

export function readBotExport(): BotExport {
  const exportPath = path.join(__dirname, "../../bot.json");
  const raw = fs.readFileSync(exportPath, "utf8");
  return JSON.parse(raw) as BotExport;
}

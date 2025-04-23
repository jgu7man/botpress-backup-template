import fs from "fs";
import path from "path";
import { Flow } from "../../types/bot/Flow";
import { bot, workflowsBase } from "./exportBotpressFlows";
import { buildFolderMap, sanitizeName } from "./folderUtils";

export function generateFlowPath(flow: Flow) {
  const folderMap = buildFolderMap(bot.folders);
  const flowDirName = sanitizeName(flow.name);
  const parentId = flow.parentFolder as string | undefined;

  const targetDir =
    parentId && folderMap[parentId]
      ? path.join(workflowsBase, folderMap[parentId].label, flowDirName)
      : path.join(workflowsBase, flowDirName);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  return targetDir;
}

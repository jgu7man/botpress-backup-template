import fs from "fs";
import path from "path";
import { BotExport } from "../../../types/bot/BotExport";
import { Workflow } from "../../../types/bot/Workflow";

import { buildFolderMap, sanitizeName } from "../utils/folderUtils";

export function generateFlowPath(
  flow: Workflow,
  bot: BotExport,
  workflowsBase: string
) {
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

import fs from "fs";
import path from "path";
import { Workflow } from "./../../types/bot/Workflow";

import { buildFolderMap, sanitizeName } from "./folderUtils";
import { bot, workflowsBase } from "./main";

export function generateFlowPath(flow: Workflow) {
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

export enum NodeType {
  ENTRY = "entry",
  EXIT = "exit",
  END = "end",
  START = "start",
  STANDARD = "standard",
  COMMENT = "comment",
  EXCEPTION_HANDLER = "exception-handler",
}

export interface FolderMap {
  [id: string]: { label: string; parent: string };
}

export function buildFolderMap(
  folders: { id: string; label: string; parentFolder: string }[]
): FolderMap {
  const map: FolderMap = {};
  folders.forEach((f) => {
    map[f.id] = { label: sanitizeName(f.label), parent: f.parentFolder };
  });
  return map;
}

export function sanitizeName(name: string): string {
  return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

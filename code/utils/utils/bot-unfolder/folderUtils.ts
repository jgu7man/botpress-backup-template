import { Folders } from "utils/types/bot/Folders";

export interface FolderMap {
  [id: string]: { label: string; parent: string };
}

export function buildFolderMap(folders: Folders[]): FolderMap {
  const map: FolderMap = {};
  folders.forEach((f) => {
    map[f.id] = { label: sanitizeName(f.label), parent: f.parentFolder };
  });
  return map;
}

export function sanitizeName(name: string): string {
  return name
    .normalize("NFKD") // Descompone caracteres acentuados
    .replace(/\p{Emoji_Presentation}/gu, "_") // Reemplaza emojis
    .replace(/[^\p{L}\p{N}]+/gu, "_") // Cualquier no letra/número a '_'
    .replace(/_+/g, "_") // Colapsar múltiples '_'
    .replace(/^_|_$/g, ""); // Eliminar '_' inicial/final
}

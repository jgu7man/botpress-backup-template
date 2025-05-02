export interface RevisionMetadata {
  lastRevisionCheckAt: string;
  lastRevisionId: number;
  multiplayerStatus: string;
  multiplayerTraces: string[];
  players: string[];
  savedAt: string;
  savedBy: string;
  sessionId: string;
}

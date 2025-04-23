import { Agents } from "./Agents";
import { Flow } from "./Flow";
import { Folders } from "./Folders";
import { Hooks } from "./Hooks";
import { Intents } from "./Intents";
import { Knowledge_base } from "./Knowledge_base";
import { List_entities } from "./List_entities";
import { Settings } from "./Settings";

export interface BotExport {
  version: string;
  settings: Settings;
  flows: Flow[];
  intents: Intents[];
  list_entities: List_entities[];
  pattern_entities: undefined[];
  actions: undefined[];
  hooks: Hooks[];
  qnas: undefined[];
  knowledge_base: Knowledge_base[];
  folders: Folders[];
  agents: Agents;
  schemas: Schemas[];
  versions: Versions[];
  revision: number;
  revisionMetadata: RevisionMetadata;
  identity: Identity;
}

import { Agents } from "./Agents";
import { BotSchemas } from "./BotSchema";
import { BotVersion } from "./BotVersion";
import { Folders } from "./Folders";
import { Hooks } from "./Hooks";
import { Identity } from "./Identity";
import { Intents } from "./Intents";
import { Knowledge_base } from "./Knowledge_base";
import { List_entities } from "./List_entities";
import { RevisionMetadata } from "./RevisionMetadata";
import { BotSettings } from "./Settings";
import { Table } from "./Table";
import { Workflow } from "./Workflow";

export interface BotExport {
  version: string;
  settings: BotSettings;
  flows: Workflow[];
  intents: Intents[];
  list_entities: List_entities[];
  pattern_entities: undefined[];
  actions: undefined[];
  hooks: Hooks[];
  qnas: undefined[];
  knowledge_base: Knowledge_base[];
  folders: Folders[];
  agents: Agents;
  schemas: BotSchemas[];
  versions: BotVersion[];
  revision: number;
  revisionMetadata: RevisionMetadata;
  identity: Identity;
  tables: Record<string, Table>;
}

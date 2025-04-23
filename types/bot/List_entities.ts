export interface List_entities {
  fuzzy: string;
  id: string;
  name: string;
  occurrences: Occurrences[];
}

export interface Occurrences {
  name: string;
  synonyms: undefined[];
}

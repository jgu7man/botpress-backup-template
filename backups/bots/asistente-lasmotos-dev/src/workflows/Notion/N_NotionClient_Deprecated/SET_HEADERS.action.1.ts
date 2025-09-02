import { workflow } from "./workflow.state";
// Node: SET_HEADERS - nd-ed51f23181
// "Set Up Notion API Request Headers with Authorization" - ins-9bc8922906

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.headers = {
  Authorization: `Bearer ${workflow.NOTION_API_KEY}`,
  'Content-Type': 'application/json',
  'Notion-Version': '2022-06-28'
}

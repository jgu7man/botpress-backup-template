import { workflow } from "./workflow.state";
// Node: SET_HEADERS - nd-19f877a804
// "Set Up Notion API Request Headers with Authorization" - ins-4f080f054b

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.headers = {
  Authorization: `Bearer ${workflow.NOTION_API_KEY}`,
  'Content-Type': 'application/json',
  'Notion-Version': '2022-06-28'
}

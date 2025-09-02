import { workflow } from "./workflow.state";
// Node: SET_HEADERS - nd-702a5cb58b
// "Set Up Notion API Request Headers with Authorization" - ins-18aa2c39cb

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.headers = {
  Authorization: `Bearer ${workflow.NOTION_API_KEY}`,
  'Content-Type': 'application/json',
  'Notion-Version': '2022-06-28'
}

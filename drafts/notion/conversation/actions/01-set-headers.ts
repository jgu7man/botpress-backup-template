workflow.headers = {
  Authorization: `Bearer ${env.NOTION_API_KEY}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

console.log("✅ Headers set: {{workflow.headers}}");

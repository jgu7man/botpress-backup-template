const env = {
  NOTION_API_KEY: "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",
  NOTION_CONVERSATION_DB: "23c906ec20fa8027a95ac5f8416d597f",
};

const workflow = {
  conversationId: "",
  phone: "3121805955",
  pageId: "",
};

export const searchForPage = async () => {
  try {
    const { NOTION_API_KEY, NOTION_CONVERSATION_DB } = env;

    if (!NOTION_API_KEY || !NOTION_CONVERSATION_DB) {
      throw new Error("Missing Notion API key or database ID");
    }

    const headers = {
      "Authorization": `Bearer ${NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    };

    const filters: any[] = [];
    if (workflow.conversationId) {
      filters.push({
        property: "ID de conversación",
        rich_text: {
          equals: workflow.conversationId,
        },
      });
    }
    if (workflow.phone) {
      const lastTenDigitsOfPhone = workflow.phone.slice(-10);
      filters.push({
        property: "Teléfono",
        rich_text: {
          ends_with: lastTenDigitsOfPhone,
        },
      });
    }

    const requestBody = {
      filter: filters.length === 1 ? filters[0] : { or: filters },
    };

    console.log("📤 Request body:", JSON.stringify(requestBody, null, 2));
    console.log("📡 Making request to Notion API...");
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${NOTION_CONVERSATION_DB}/query`,
      requestBody,
      { headers }
    );

    console.log("✅ Response received!");
    console.log("📊 Status:", response.status);
    const results = response.data.results;
    console.log("📄 Results found:", results.length);

    if (results.length > 0) {
      const pageId = results[0].id;
      console.log("🆔 Page found:", pageId);
      workflow.pageId = pageId;
      return pageId;
    } else {
      console.warn("❗️ No page found for the given conversation ID.");
      return null;
    }
  } catch (error) {
    console.error("❌ Error searching for page:", error);
    return null;
  }
};

// Execute the function
searchForPage()
  .then((result) => {
    console.log("🏁 Function execution completed. Result:", result);
  })
  .catch((error) => {
    console.error("💥 Execution failed:", error);
  });

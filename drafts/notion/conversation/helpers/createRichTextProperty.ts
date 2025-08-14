export const createRichTextProperty = (content: string) => ({
  rich_text: [
    {
      type: "text",
      text: {
        content,
      },
    },
  ],
});

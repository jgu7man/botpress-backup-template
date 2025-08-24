export const buildTitle = (conversationId: string) => ({
  title: [
    {
      type: "text",
      text: {
        content: conversationId,
      },
    },
  ],
});

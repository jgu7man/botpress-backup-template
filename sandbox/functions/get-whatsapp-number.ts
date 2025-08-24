console.log("⭕️ Start turn", event.conversationId);
const phoneNumber = event.tags?.user?.["whatsapp:userId"] || "";
console.log("👉🏼", phoneNumber);

if (!user.phone && phoneNumber) {
  user.phone = phoneNumber;
}

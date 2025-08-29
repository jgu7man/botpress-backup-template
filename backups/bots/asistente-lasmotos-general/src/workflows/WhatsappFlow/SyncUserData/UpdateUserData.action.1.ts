// Node: UpdateUserData - nd-b2aae07e53
// "Assign WhatsApp Number to User if Not Already Set" - ins-c9660f58eb

export {};

// ------------------ EXECUTE CODE -------------------------

console.log('⭕️ Start turn', event.conversationId)
  const phoneNumber = event.tags?.user?.['whatsapp:userId'] || ''
  console.log('👉🏼', phoneNumber)

  if (!user.phone && phoneNumber) {
    user.phone = phoneNumber
  }

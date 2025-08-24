import jwt from "jsonwebtoken";
const YOUR_USER_ID = "jgu7man";
const YOUR_ENCRYPTION_KEY = "bp_pat_Aq94zuBYFLLiWEcrFng9XeIRNmdCMHDY7dvb";
const xUserKey = jwt.sign({ id: YOUR_USER_ID }, YOUR_ENCRYPTION_KEY, {
  algorithm: "HS256",
});

console.log(`x-user-key: ${xUserKey}`);

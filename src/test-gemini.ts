
import dotenv from "dotenv";
dotenv.config();

import { generateWish } from "./modules/ai/ai.service";

(async () => {
  try {
    const result = await generateWish({
      occasion: "good_morning",
      senderName: "Ravi",
      receiverName: "Amit",
      language: "hi",
      tone: "friendly",
    });

    console.log("✅ Gemini Response:\n");
    console.log(result.text);
  } catch (error) {
    console.error("❌ Gemini Error:", error);
  }
})();

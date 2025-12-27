import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

(async () => {
  try {
    console.log("🔍 Fetching available models...\n");
    
    // List all available models
    const models = await genAI.listModels();
    
    console.log("✅ Available Models:\n");
    for await (const model of models) {
      console.log(`Model: ${model.name}`);
      console.log(`Display Name: ${model.displayName}`);
      console.log(`Supported Methods:`, model.supportedGenerationMethods);
      console.log("---");
    }
  } catch (error) {
    console.error("❌ Error listing models:", error);
  }
})();

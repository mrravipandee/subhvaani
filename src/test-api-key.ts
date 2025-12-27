import dotenv from "dotenv";
dotenv.config();

console.log("Checking API Key...\n");
console.log("GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
console.log("GEMINI_API_KEY length:", process.env.GEMINI_API_KEY?.length || 0);
console.log("GEMINI_API_KEY starts with:", process.env.GEMINI_API_KEY?.substring(0, 10) || "NOT SET");

// Try with a simple fetch request to test the key
const testApiKey = async () => {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("\n❌ GEMINI_API_KEY is not set in .env file");
    return;
  }

  console.log("\n🔍 Testing API key validity...");
  
  try {
    // Try to list models using REST API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    
    console.log("\nResponse Status:", response.status);
    console.log("Response Status Text:", response.statusText);
    
    if (response.ok) {
      const data = await response.json();
      console.log("\n✅ API Key is valid!");
      console.log("\nAvailable models:");
      data.models?.forEach((model: any) => {
        console.log(`- ${model.name} (${model.displayName})`);
      });
    } else {
      const error = await response.text();
      console.error("\n❌ API Key validation failed:");
      console.error(error);
    }
  } catch (error) {
    console.error("\n❌ Error testing API key:", error);
  }
};

testApiKey();

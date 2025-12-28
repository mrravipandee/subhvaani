import genAI from "../../config/gemini";
import { buildImagePrompt } from "./image.prompt";

export const generateImageBase64 = async ({
  occasion,
  festivalName,
  language,
}: {
  occasion: "good_morning" | "good_night" | "festival";
  festivalName?: string;
  language: "hi" | "en" | "mr";
}) => {
  const prompt = buildImagePrompt({ occasion, festivalName, language });

  // NOTE: Image generation with Gemini/Imagen is not available on free tier (quota limit: 0)
  // This function currently throws an error to indicate the feature is not available
  // 
  // Options to fix:
  // 1. Upgrade Google AI API plan to enable image generation
  // 2. Use external image API (DALL-E, Stability AI, etc.)
  // 3. Use pre-designed template images from Cloudinary
  // 4. Use Gemini to generate detailed descriptions for manual image creation
  
  throw new Error(
    "Image generation is not available with the current API plan. " +
    "The free tier has a quota limit of 0 for image generation models. " +
    "Please upgrade your Google AI API plan or use an alternative image service."
  );

  // Original code (kept for reference when quota is available):
  /*
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-image",
  });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  const imagePart = result.response.candidates?.[0]?.content?.parts?.find(
    (p: any) => p.inlineData
  );

  if (!imagePart?.inlineData?.data) {
    throw new Error("Image generation failed - no image data in response");
  }

  return `data:image/png;base64,${imagePart.inlineData.data}`;
  */
};

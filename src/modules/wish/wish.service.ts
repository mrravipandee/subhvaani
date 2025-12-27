import { Wish } from "./wish.model";
import { generateWish } from "../ai/ai.service";
import { uploadImage, uploadAudio } from "../media/media.service";

type GenerateWishInput = {
  userId: string;
  occasion: "good_morning" | "good_night" | "festival";
  festivalName?: string;
  receiverName: string;
  language: "hi" | "en" | "mr";
  tone?: "friendly" | "formal" | "elder";
  withImage?: boolean;
  withAudio?: boolean;
};

export const generateAndSaveWish = async (input: GenerateWishInput) => {
  // 1. Generate text from Gemini
  const aiResult = await generateWish({
    occasion: input.occasion,
    festivalName: input.festivalName,
    senderName: "SubhVaani User", // later from auth
    receiverName: input.receiverName,
    language: input.language,
    tone: input.tone,
  });

  let imageUrl: string | undefined;
  let audioUrl: string | undefined;

  // 2. Image generation (later connect Gemini image)
  if (input.withImage) {
    // TEMP placeholder (later replace with AI image base64)
    imageUrl = await uploadImage("data:image/png;base64,XXXX");
  }

  // 3. Audio generation (later connect Gemini / TTS)
  if (input.withAudio) {
    audioUrl = await uploadAudio("data:audio/mp3;base64,XXXX");
  }

  // 4. Save to DB
  const wish = await Wish.create({
    userId: input.userId,
    occasion: input.occasion,
    festivalName: input.festivalName,
    receiverName: input.receiverName,
    language: input.language,
    text: aiResult.text,
    imageUrl,
    audioUrl,
  });

  return wish;
};

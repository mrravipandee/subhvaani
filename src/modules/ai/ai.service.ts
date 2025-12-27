import { buildWishPrompt } from "./prompt.builder";
import { generateWishText } from "./text.generator";

type GenerateWishInput = {
  occasion: "good_morning" | "good_night" | "festival";
  festivalName?: string;
  senderName: string;
  receiverName: string;
  language: "hi" | "en" | "mr";
  tone?: "friendly" | "formal" | "elder";
};

export const generateWish = async (input: GenerateWishInput) => {
  const prompt = buildWishPrompt(input);

  const text = await generateWishText(prompt);

  return {
    text,
  };
};

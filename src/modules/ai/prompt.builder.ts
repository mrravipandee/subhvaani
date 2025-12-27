type WishPromptInput = {
  occasion: "good_morning" | "good_night" | "festival";
  festivalName?: string;
  senderName: string;
  receiverName: string;
  language: "hi" | "en" | "mr";
  tone?: "friendly" | "formal" | "elder";
};

export const buildWishPrompt = (data: WishPromptInput): string => {
  const { occasion, festivalName, senderName, receiverName, language, tone } =
    data;

  let base = "";

  if (occasion === "good_morning") {
    base = `Generate a warm good morning message`;
  }

  if (occasion === "good_night") {
    base = `Generate a calm good night message`;
  }

  if (occasion === "festival") {
    base = `Generate a ${festivalName} greeting message`;
  }

  return `
${base}
Language: ${language}
Sender name: ${senderName}
Receiver name: ${receiverName}
Tone: ${tone || "friendly"}
Style: Indian cultural, emotional, short (2-3 lines), WhatsApp friendly.
Do not include emojis excessively.
Do not include hashtags or links.
`;
};

type ImagePromptInput = {
  occasion: "good_morning" | "good_night" | "festival";
  festivalName?: string;
  language: "hi" | "en" | "mr";
};

export const buildImagePrompt = ({
  occasion,
  festivalName,
}: ImagePromptInput): string => {
  if (occasion === "festival") {
    return `Create a beautiful Indian festival greeting image for ${festivalName}.
    Style: clean, colorful, traditional, WhatsApp friendly, no text.`;
  }

  if (occasion === "good_night") {
    return `Create a calm good night greeting image with moon, stars, soft colors.
    Style: minimal, peaceful, WhatsApp friendly.`;
  }

  return `Create a bright good morning greeting image with sunrise, flowers.
  Style: positive, Indian vibe, WhatsApp friendly.`;
};

import genAI from "../../config/gemini";

export const generateWishText = async (prompt: string) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);

  return result.response.text();
};

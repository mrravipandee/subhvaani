import { Request, Response } from "express";
import { generateAndSaveWish } from "./wish.service";

export const generateWishController = async (req: Request, res: Response) => {
  const {
    userId,
    occasion,
    festivalName,
    receiverName,
    language,
    tone,
    withImage,
    withAudio,
  } = req.body;

  if (!userId || !occasion || !receiverName || !language) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const wish = await generateAndSaveWish({
    userId,
    occasion,
    festivalName,
    receiverName,
    language,
    tone,
    withImage,
    withAudio,
  });

  res.status(201).json(wish);
};

// src/modules/user/user.controller.ts
import { Request, Response } from "express";
import { createUser, findUserByPhone } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  const { name, phone, preferredLanguage } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (phone) {
    const existing = await findUserByPhone(phone);
    if (existing) {
      return res.json(existing);
    }
  }

  const user = await createUser({
    name,
    phone,
    preferredLanguage,
  });

  res.status(201).json(user);
};

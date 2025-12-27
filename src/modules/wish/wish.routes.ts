import { Router } from "express";
import { generateWishController } from "./wish.controller";

const router = Router();

router.post("/generate", generateWishController);

export default router;

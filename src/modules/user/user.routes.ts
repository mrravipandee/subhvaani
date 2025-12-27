import { Router } from "express";
import { createUserController } from "./user.controller";

const router = Router();

router.post("/create", createUserController);

export default router;

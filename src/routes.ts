
import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Welcome to SubhVaani API" });
});

// Future routes example:
// router.use("/auth", authRoutes);
// router.use("/wish", wishRoutes);

export default router;

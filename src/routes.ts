
import { Router } from "express";
import userRoutes from "./modules/user/user.routes";
import wishRoutes from "./modules/wish/wish.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/wishes", wishRoutes);

router.get("/", (_req, res) => {
  res.json({ message: "Welcome to SubhVaani API" });
});

// Future routes example:
// router.use("/auth", authRoutes);
// router.use("/wish", wishRoutes);

export default router;

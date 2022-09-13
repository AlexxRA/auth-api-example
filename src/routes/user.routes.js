import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { isAdmin, isModerator, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

const router = Router();

router.post("/", [verifyToken, isAdmin, checkExistingUser], createUser);
router.get("/", [verifyToken, isAdmin, isModerator], getUsers);

export default router;

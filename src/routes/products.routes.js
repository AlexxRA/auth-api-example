import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
} from "../controllers/product.controller.js";
import { verifyToken, isModerator, isAdmin, verifyRoles } from "../middlewares/authJwt.js";

const router = Router();

router.get("/", getProducts);
router.get("/:productId", getProductById);
router.post("/", verifyRoles("ADMIN", "MODERATOR"), [verifyToken, isModerator], createProduct);
router.put("/:productId", [verifyToken, isModerator], updateProductById);
router.delete("/:productId", verifyRoles(["ADMIN"]), [verifyToken, isAdmin], deleteProductById);

export default router;

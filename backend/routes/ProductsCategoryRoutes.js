import express from "express";
// import AuthMiddlewares from "../middlewares/authMiddleware.js";
import CategoryController from "../controllers/ProductsCategoryController.js";

const router = express.Router();

router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getACategory);

export default router;
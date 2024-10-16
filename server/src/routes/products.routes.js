import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";
import { createProductCtrl } from "../controllers/product.controller.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage, createProductCtrl)

export { productsRouter }
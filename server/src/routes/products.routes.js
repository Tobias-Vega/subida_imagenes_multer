import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";
import { createProductCtrl } from "../controllers/product.controller.js";
import { productValidations } from "../../validations/product.validations.js";
import { applyValidations } from "../middlewares/apply.validations.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage, productValidations, applyValidations, createProductCtrl)

export { productsRouter }
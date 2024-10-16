import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage, (req,res) => {
    res.status(201).json({
        image: "http://localhost:3000/" + req.body.image
    });
})

export { productsRouter }
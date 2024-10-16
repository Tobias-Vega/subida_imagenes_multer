import { createProduct } from "../models/product.model.js";

export const createProductCtrl = (req, res) => {
    try {
        const { name, description, price } = req.body;

        const imageUrl = `http://localhost:3000/${req.body.imageUrl}`

        const product = createProduct({name, description, price, imageUrl});

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({msg: 'Error al crear el producto', error})
    }
}
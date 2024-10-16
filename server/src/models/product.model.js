import { products } from "../database/db.js";

export const createProduct = (product) => {
    const generateId = new Date().getTime()
    const { name, description, price, imageUrl } = product;

    products.push({
        id: generateId,
        name,
        description,
        price,
        imageUrl
    })

    return { id: generateId, name, description, price, imageUrl }
}
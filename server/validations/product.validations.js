import { body } from 'express-validator';

export const productValidations = [
    body('name')
    .isString()
    .withMessage('El nombre del producto debe ser un string')
    .notEmpty()
    .withMessage('Campo obligatorio'),
    body('description')
    .isString()
    .withMessage('La descripción del producto debe ser un string')
    .notEmpty()
    .withMessage('Campo obligatorio'),
    body('price')
    .isNumeric()
    .withMessage('El precio debe ser número')
    .notEmpty()
    .withMessage('Campo obligatorio')
];
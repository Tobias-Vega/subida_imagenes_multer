# Actividad multer

Este proyecto incluye las siguientes dependencias necesarias para el funcionamiento del servidor. A continuación, se detallan los pasos para instalar las dependencias y cómo ejecutar el servidor en modo de desarrollo.

## Dependencias

- `express`
- `cors`
- `multer`
- `express-validator`

## Instalación

- cd server

- npm i 

- npm run dev

## Proceso

Durante este proyecto se utilizó una base de datos del servidor, guardano los siguientes campos: name (nombre del producto), description (descripción del producto), price(precio del producto), imageUrl(url de la imagen).
Para poder realizar subida de imágenes se utlilizó la dependencia multer, por medio de la cual se configuraron aspectos como el formato y el límite de la imagen.
Para validar los campos se utilizó la librería de express-validator, el cual fue de utilidad para validar los campos como el tipo de dato que corresponde a cada uno y que sean obligatorios.
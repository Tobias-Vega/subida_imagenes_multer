import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { productsRouter } from './routes/products.routes.js';
import path from 'node:path'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.join(path.resolve(), "src", "uploads")))

app.use('/products', productsRouter)

app.listen(3000, () => console.log('Server on port 3000'));
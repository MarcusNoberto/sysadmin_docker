import "dotenv/config";
import express from "express";

import { createServer } from "http";
import { productsRouter } from "../routers/Products";

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

const server = createServer(app);
export { server };

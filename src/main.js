import Express from "express";
import cors from "cors";
const app = Express();

// Database
import db from "./database/sqlite.js";

// Middlewares Setup
import middlewaresConfig from "./middlewares/config.js";
middlewaresConfig(app, Express, cors);

// Controllers
import userController from "./controllers/userController.js";
import productController from "./controllers/produtosController.js";
import carrinhoController from "./controllers/carrinhoController.js";
userController(app, db);
productController(app, db);
carrinhoController(app, db);


export default app;
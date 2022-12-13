import Express from "express";
import cors from "cors";
const app = Express();

// Database
import { db } from "./database/createDatabase.js";

// Middlewares Setup
import middlewaresConfig from "./middlewares/config.js";
middlewaresConfig(app, Express, cors);

// Controllers
import userController from "./controllers/usuarios/userController.js";
userController(app, db);

export default app;
import Product from "../models/produtoModel.js";
import ProductsDAO from "../dao/productsDAO.js";

const productController = (app, db) => {

    app.get("/products", (req, res) => {

    });

    app.get("/product/:id", (req, res) => {

    });

    app.post("/newProduct", (req, res) => {

    });

    app.put("/editProduct/:id", (req, res) => {

    });

    app.delete("/removeProduct/:id", (req, res) => {

    });

};

export default productController;
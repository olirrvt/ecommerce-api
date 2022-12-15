import Carrinho from "../models/userModels.js";
import CarrinhoDAO from "../dao/carrinhoDAO.js";

const carrinhoController = (app, db) => {
    const newCarrinhoDao = new CarrinhoDAO(db);

    // GetAll
    app.get("/carrinho", async (req, res) => {
        try {
            const dadosCarrinho = await newCarrinhoDao.PegarTodos();
            res.json(dadosCarrinho);
          } catch (erro) {
            console.log(erro);
          }
    });

    app.get("/product/:id", (req, res) => {

    });

    // PostCarrinho
    app.post("/carrinho", async (req, res) => {
        try {
            const novoCarrinho = new Carrinho(
              req.body.status
            );
      
            const newStateCarrinho = await newCarrinhoDao.InserirNovo(novoCarrinho);
            res
              .status(200)
              .json({
                message: "Status adicionado!",
                usuario: newStateCarrinho
              });
          } catch (erro) {
            console.log(erro);
          };
    });

    app.put("/editProduct/:id", (req, res) => {

    });

    app.delete("/removeProduct/:id", (req, res) => {

    });

};

export default carrinhoController;
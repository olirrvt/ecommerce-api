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

    app.get("/product/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const carrinhoData = await newCarrinhoDao.PegarId(id);
        res.status(200).json(carrinhoData);
      } catch (erro) {
        console.log(erro);
      };
    });

    // PostCarrinho
    app.post("/carrinho", async (req, res) => {
        try {
            const novoCarrinho = new Carrinho(
              req.body.status,
              req.body.user_id,
              req.body.product_id
            );
      
            const newStateCarrinho = await newCarrinhoDao.InserirNovo(novoCarrinho);
            res
              .status(200)
              .json({
                message: "Produto adicionado ao carrinho!",
                usuario: newStateCarrinho
              });
          } catch (erro) {
            console.log(erro);
          };
    });

    app.put("/editProduct/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const carrinhoAntigo = await newCarrinhoDao.PegarId(id);
  
        if (carrinhoAntigo[0].id) {
  
          const dadosNovos = new User (
            req.body.status,
            req.body.user_id, 
            req.body.product_id 
          );
  
          const carrinhoAtual = [ 
            dadosNovos.status || carrinhoAntigo[0].status, 
            dadosNovos.user_id || carrinhoAntigo[0].user_id, 
            dadosNovos.product_id || carrinhoAntigo[0].product_id,
            id,
          ];
    
          const data = await newUsersDao.EditarDados(carrinhoAtual);
    
          res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            usuario: data
          });
  
        } else {
          res.status(400).send({ message: "Usuário não encontrado!" })
        } 
  
      } catch (erro) {
        console.log(erro);
      };
    });

    app.delete("/carrinho/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const data = await newCarrinhoDao.Deletar(id);
        res.send(data);
      } catch (erro) {
        console.log(erro);
      };
    });
};

export default carrinhoController;
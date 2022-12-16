import Product from "../models/produtoModel.js";
import ProductsDAO from "../dao/productsDAO.js";

const productController = (app, db) => {
    const newProductsDao = new ProductsDAO(db);

    // GetAllProduct
    app.get("/products", async (req, res) => {
        try {
            const dataProduct = await newProductsDao.PegarTodosProdutos();
            res.json({
              produto: dataProduct,
              error: false
            });
          } catch (erro) {
            res.status(400).json({
              message: erro.message,
              error: true
            });
          }
    });

    // GetIdProduct
    app.get('/product/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const dataProduct = await newProductsDao.PegarProdutoId(id);
        res.status(200).json({
          usuario: dataProduct,
          error: false
        });
      } catch (erro) {
        res.status(400).json({
          message: erro.message,
          error: true
        });
      };
    });

    // PostProduct
    app.post("/newProduct", async (req, res) => {

        try {
            const novoProduto = new Product(
              req.body.titulo,
              req.body.descricao,
              req.body.valor
            );
      
            const newProductData = await                   
            newProductsDao.InserirProdutoNovo(novoProduto);
            res
              .status(200)
              .json({
                message: "Produto adicionado com sucesso!",
                produto: newProductData,
              });
          } catch (erro) {
            res.status(400).json({
              message: erro.message,
              error: true
            });
          };
    });

    // EditandoProduto
    app.put("/product/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const produtoAntigo = await newProductsDao.PegarProdutoId(id);
  
        if (produtoAntigo[0].id) {
  
          const produtoNovo = new Product (
            req.body.titulo,
            req.body.descricao, 
            req.body.valor 
          );
  
          const produtoAtual = [ 
            produtoNovo.titulo || produtoAntigo[0].titulo, 
            produtoNovo.descricao || produtoAntigo[0].descricao, 
            produtoNovo.valor || produtoAntigo[0].valor,
            id,
          ];
    
          const data = await newProductsDao.EditarProdutos(produtoAtual);
    
          res.status(200).json({
            message: "Produto atualizado com sucesso!",
            usuario: data
          });
  
        } else {
          res.status(404).send({
            message: "Produto não encontrado!",
            error: true
          });
        };
  
      } catch (erro) {
        res.status(400).json({
          message: erro.message,
          error: true
        });
      };
    });

    // DeletandoProduto
    app.delete("/product/:id", async (req, res) => {
      
      try {
      const id = req.params.id;
      const data = await newProductsDao.DeletarProduto(id);
      res.send({
        message: "Usuário deletado com sucesso!",
        usuario: data,
        error: false
      });
    } catch (erro) {
      res.status(400).json({
        message: erro.message,
        error: true
      });
    };

  });

};

export default productController;
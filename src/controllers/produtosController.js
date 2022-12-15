import Product from "../models/produtoModel.js";
import ProductsDAO from "../dao/productsDAO.js";

const productController = (app, db) => {
    const newProductsDao = new ProductsDAO(db);

    // GetAllProduct
    app.get("/products", async (req, res) => {
        try {
            const dataProduct = await newProductsDao.PegarTodosProdutos();
            res.json(dataProduct);
          } catch (erro) {
            console.log(erro);
          }
    });

    // GetIdProduct
    app.get('/product/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const dataProduct = await newProductsDao.PegarProdutoId(id);
        res.status(200).json(dataProduct);
      } catch (erro) {
        console.log(erro);
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
            console.log(erro);
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
          res.status(400).send({ message: "Produto não encontrado!" })
        };
  
      } catch (erro) {
        console.log(erro);
      };
    });

    // DeletandoProduto
    app.delete("/product/:id", async (req, res) => {
      
      try {
      const id = req.params.id;
      const data = await newProductsDao.DeletarProduto(id);
      res.send(data);
    } catch (erro) {
      console.log(erro);
    };

  });

};

export default productController;
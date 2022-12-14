class ProductsDAO {
    constructor(banco) {
        this.db = banco;
    };

    PegarTodosProdutos(){
        const SQL = `SELECT * FROM products`;

        return new Promise((resolve, reject) => {
          this.db.all(SQL, (erro, rows) => {
            if (!erro) {
              resolve(rows);
            } else {
              reject(erro);
            }
          });
        });
    };

    PegarProdutoId(id) {

      const SQL = "SELECT * FROM products WHERE id = ?"

      return new Promise((resolve, reject) => {
        this.db.all(SQL, id, (erro, rows) => {
          if (!erro) {
            resolve(rows)
          } else {
            reject(erro)
          }
        });
      });
  
    };

    InserirProdutoNovo(novoProduto){
        const SQL = `INSERT INTO products (id, titulo, descricao, valor) VALUES (?,?,?,?)`;

        return new Promise((resolve, reject) => {
          this.db.all(SQL, 
            [ 
                novoProduto.id,
                novoProduto.titulo, 
                novoProduto.descricao, 
                novoProduto.valor
            ], 
            (erro) => {
              
              if (!erro) {
                  resolve(novoProduto);
              } else {
                  reject(erro);
              };
    
          });
        });
    };

    EditarProdutos(produtoAtual) {
      const SQL = "UPDATE products SET titulo = ?, descricao = ?, valor = ? WHERE id = ?"

      return new Promise((resolve, reject) => {
        this.db.run(
        SQL,
        produtoAtual,
        (erro) => {
          if (!erro) {
            resolve(produtoAtual);
          } else {
            reject(console.log(erro));
          };
        });
  
      });
    };

    DeletarProduto(id){

      const SQL = "DELETE FROM products WHERE id = ?"

      return new Promise((resolve, reject) => {
        this.db.run(SQL, id, (erro) => {
          if (!erro) {
            resolve("Produto deletado com sucesso!");
          } else {
            reject(console.log(erro));
          };
        });
      });

    };
};

export default ProductsDAO;
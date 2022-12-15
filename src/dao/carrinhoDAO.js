class CarrinhoDAO {
  constructor(banco) {
    this.db = banco;
  }

  PegarTodos() {
    const SQL = `SELECT * FROM carrinho`;

    return new Promise((resolve, reject) => {
      this.db.all(SQL, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }

  PegarId(id) {

    const SQL = "SELECT * FROM carrinho WHERE id = ?"

    return new Promise((resolve, reject) => {
      this.db.all(SQL, id, (erro, rows) => {
        if (!erro) {
          resolve(rows)
        } else {
          reject(erro)
        }
      });
    });

  }

  InserirNovo(novoCarrinho) {
    const SQL = `INSERT INTO carrinho (status, user_id, product_id) VALUES (?,?,?)`;

    return new Promise((resolve, reject) => {
      this.db.all(SQL, 
        [
            novoCarrinho.status, 
            novoCarrinho.user_id, 
            novoCarrinho.product_id
        ], 
        (erro) => {
          
          if (!erro) {
              resolve(novoCarrinho);
          } else {
              reject(erro);
          };

      });
    });
  };

  Deletar(id) {

    const SQL = "DELETE FROM carrinho WHERE id = ?"

    return new Promise((resolve, reject) => {
      this.db.run(SQL, id, (erro) => {
        if (!erro) {
          resolve("Carrinho deletado com sucesso!");
        } else {
          reject(console.log(erro));
        };
      });
    });

  }

  Editar(carrinhoAtual) {

    const SQL = "UPDATE carrinho SET status = ?, user_id = ?, product_id = ? WHERE id = ?"

    return new Promise((resolve, reject) => {
      this.db.run(
      SQL,
      carrinhoAtual,
      (erro) => {
        if (!erro) {
          resolve(carrinhoAtual);
        } else {
          reject(console.log(erro));
        };
      });

    });

  }
}

export default CarrinhoDAO;

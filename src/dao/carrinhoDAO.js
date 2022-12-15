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

  PegarId() {

  }

  InserirNovo() {
    const SQL = `INSERT INTO users (id, status) VALUES (?,?,?,?)`;

    return new Promise((resolve, reject) => {
      this.db.all(SQL, 
        [
            novoUsuario.id, 
            novoUsuario.nome, 
            novoUsuario.email, 
            novoUsuario.senha
        ], 
        (erro) => {
          
          if (!erro) {
              resolve(novoUsuario);
          } else {
              reject(erro);
          };

      });
    });
  }

  Deletar() {}

  Editar() {}
}

export default CarrinhoDAO;

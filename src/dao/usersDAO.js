class UsersDAO {
  constructor(banco) {
    this.db = banco;
  }

  pegarTodosDados() {
    const SQL = `SELECT * FROM users`;

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

  pegarUserId(id) {

    const SQL = "SELECT * FROM users WHERE id = ?"

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

  Login(email, senhaCripto) {

    const SQL = "SELECT * FROM users WHERE email = ? AND senha = ?"

    return new Promise((resolve, reject) => {
      this.db.all(SQL, email, senhaCripto, (erro, rows) => {
        if (!erro) {
          resolve(rows)
        } else {
          reject(erro)
        }
      });
    });

  };
  
  InserirDadosNovo(novoUsuario) {
    const SQL = `INSERT INTO users (nome, email, senha) VALUES (?,?,?)`;

    return new Promise((resolve, reject) => {
      this.db.all(SQL, 
        [
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
  };

  DeletarDado(id){

    const SQL = "DELETE FROM users WHERE id = ?"

    return new Promise((resolve, reject) => {
      this.db.run(SQL, id, (erro) => {
        if (!erro) {
          resolve("Usuário deletado com sucesso!");
        } else {
          reject(console.log(erro));
        };
      });
    });
  };

  EditarDados(usuarioAtual){

    const SQL = "UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?"

    return new Promise((resolve, reject) => {
      this.db.run(
      SQL,
      usuarioAtual,
      (erro) => {
        if (!erro) {
          resolve(usuarioAtual);
        } else {
          reject(console.log(erro));
        };
      });

    });
    
  };

};

export default UsersDAO;
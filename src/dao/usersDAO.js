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

    const SQL = "SELECT nome, email, senha FROM users WHERE id = ?"

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
  
  InserirDadosNovo(novoUsuario) {
    const SQL = `INSERT INTO users (id, nome, email, senha) VALUES (?,?,?,?)`;

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

  EditarDados(id, data){

    const SQL = "UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?"

    return new Promise((resolve, reject) => {
      this.db.run(SQL, id, 
      this.dadosUsers = [ 
        data.nome,
        data.email, 
        data.senha 
      ],
      (erro) => {
        if (!erro) {
          resolve(data);
        } else {
          reject(console.log(erro));
        };
      });

    });
  };

};

export default UsersDAO;
class UsersDAO {
  constructor(banco) {
    this.db = banco;
  }

  getAllDatas() {
    const SQL = `SELECT * FROM users`;
    new Promise((resolve, reject) => {
      db.all(SQL, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  };

  InserirDados() {}
};

import User from "../models/userModels.js";

const userController = (app, db) => {

  app.get("/", (req, res) => {
    
  });

  app.post("/", (req, res) => {

    const SQL = `INSERT INTO users (id, nome, email, senha) VALUES (?,?,?,?)`;

    const novoUsuario = new User(
        req.body.nome, 
        req.body.email, 
        req.body.senha
    );

    new Promise((resolve, reject) => {
      db.all(SQL, 
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
    })
  
    .then((result) => res.json(result))
    .catch((error) => console.log(error));

  });

  app.put("/:id", (req, res) => {});

  app.delete("/:id", (req, res) => {});
};

export default userController;

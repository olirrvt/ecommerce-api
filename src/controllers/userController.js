import User from "../models/userModels.js";
import UsersDAO from "../dao/usersDAO.js";

const userController = (app, db) => {
  const newUsersDao = new UsersDAO(db);

  // GetAllUsers
  app.get("/users", async (req, res) => {
    try {
      const dataUsers = await newUsersDao.pegarTodosDados();
      res.json(dataUsers);
    } catch (erro) {
      console.log(erro);
    }
  });

  // GetUserID
  app.get('/user/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const dataUser = await newUsersDao.pegarUserId(id);
      res.status(200).json(dataUser);
    } catch (erro) {
      console.log(erro);
    };
  });

  // PostUser
  app.post("/newUser", async (req, res) => {
    try {
      const novoUsuario = new User(
        req.body.nome,
        req.body.email,
        req.body.senha
      );

      const newUserData = await newUsersDao.InserirDadosNovo(novoUsuario);
      res
        .status(200)
        .json({
          message: "Usuário inserido com sucesso!",
          usuario: newUserData,
        });
    } catch (erro) {
      console.log(erro);
    };
  });

  // EditUser
  app.put("/editUser/:id", async (req, res) => {

    try {
      const id = req.params.id;

      const dadosAntigos = await newUsersDao.pegarUserId(id);
      console.log(dadosAntigos)
      // Promise

      const dadosNovos = new User (
        req.body.nome,
        req.body.email,
        req.body.senha
      );

      const data = await newUsersDao.EditarDados(id, {
        nome: dadosNovos.nome ? dadosNovos.nome : dadosAntigos.nome,
        email: dadosNovos.email ? dadosNovos.email : dadosAntigos.email,
        senha: dadosNovos.senha ? dadosNovos.senha : dadosAntigos.senha
      });

      res.status(200).json({
        message: "Usuário atualizado com sucesso!",
        usuario: data
      });

    } catch (erro) {
      console.log(erro);
    };

  });

  // DeleteUser
  app.delete("/user/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await newUsersDao.DeletarDado(id);
      res.send(data);
    } catch (erro) {
      console.log(erro);
    };
  });

};

export default userController;
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

  // Login
  app.get('/login', async (req, res) => {
    try {
      const { email, senha } = req.body;
      const dataUser = await newUsersDao.Login(email, senha);
      res.status(200).json(dataUser);
    } catch (erro) {
      console.log(erro);
    }
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
  app.put("/user/:id", async (req, res) => { 
    const id = req.params.id;
    try {
      const dadosAntigos = await newUsersDao.pegarUserId(id);

      if (dadosAntigos[0].id) {

        const dadosNovos = new User (
          req.body.nome,
          req.body.email, 
          req.body.senha 
        );

        const usuarioAtual = [ 
          dadosNovos.nome || dadosAntigos[0].nome, 
          dadosNovos.email || dadosAntigos[0].email, 
          dadosNovos.senha || dadosAntigos[0].senha,
          id,
        ];
  
        const data = await newUsersDao.EditarDados(usuarioAtual);
  
        res.status(200).json({
          message: "Usuário atualizado com sucesso!",
          usuario: data
        });

      } else {
        res.status(400).send({ message: "Usuário não encontrado!" })
      } 

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
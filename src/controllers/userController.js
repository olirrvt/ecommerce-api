import User from "../models/userModels.js";
import UsersDAO from "../dao/usersDAO.js";
import { sha256 } from "js-sha256";

const userController = (app, db) => {
  const newUsersDao = new UsersDAO(db);

  // GetAllUsers
  app.get("/users", async (req, res) => {
    try {
      const dataUsers = await newUsersDao.pegarTodosDados();
      res.json({
        usuario: dataUsers,
        error: false
      });
    } catch (erro) {
      res.status(400).send({
        message: erro.message,
        error: true
      });
    }
  });

  // GetUserID
  app.get('/user/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const dataUser = await newUsersDao.pegarUserId(id);
      res.status(200).json({
        usuario: dataUser,
        logado: false,
        error: false
      });
    } catch (erro) {
      res.status(400).send({
        message: erro.message,
        error: true
      });
    };
  });
  
  // GetUserEmail
  app.get("/usermail/:email", async (req, res) => {
    try {

      const email = req.params.email;
      const dataUser = await newUsersDao.pegarUserEmail(email);
      // console.log(dataUser[0].email);
      res.status(200).json({ 
        usuario: dataUser
      });
    } catch(erro) {
      res.status(400).send({
        message: erro.message,
        error: true
      });
    };
  });

  // Login
  app.post('/login', async (req, res) => {
    try {
      const { email, senha } = req.body;
      const senhaCripto = sha256(senha);
      
      const dataUser = await newUsersDao.Login(email, senhaCripto);
      const checkedUser = dataUser.length;

        res.status(200)
        .json({
          message: checkedUser ? "Login efetuado com sucesso" : "Erro na autenticação",
          logado: checkedUser ? true : false,
          usuario: dataUser
        });

    } catch (erro) {
      console.log(erro);
      res.status(400).send({
        message: erro.message,
        error: true
      });
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

      const checkedUser = await newUsersDao.pegarUserEmail(req.body.email);
      let checks = checkedUser.length;

      if ( !checks ) {
        const newUserData = await newUsersDao.InserirDadosNovo(novoUsuario);

        res
          .status(200)
          .json({
            message: "Usuário inserido com sucesso!",
            usuario: newUserData,
            error: false
          });
      } else {
        res.json({
          message: "Usuário já cadastrado",
          usuario: checkedUser
        })
      }

    } catch (erro) {
      res.status(400).json({
        message: erro.message,
        error: true
      });
    };
  });

  // EditUser
  app.put("/user/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const dadosAntigos = await newUsersDao.pegarUserId(id);

      if (dadosAntigos[0].id) {

        const dadosNovos = new User(
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
          usuario: data,
          error: false
        });

      } else {
        res.status(400).json({
          message: "Usuário não encontrado!",
          error: true
        })
      }

    } catch (erro) {
      res.status(400).json({
        message: erro.message,
        error: true
      });
    };

  });

  // DeleteUser
  app.delete("/user/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await newUsersDao.DeletarDado(id);
      res.status(200).json({
        message: "Usuário deletado com sucesso!",
        error: false
      });
    } catch (erro) {
      res.status(400).json({
        message: erro.message,
        error: true
      });
    };
  });
};

export default userController;
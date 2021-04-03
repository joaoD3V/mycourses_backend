const database = require('../database/connection');

class UserController {
  createUser(request, response) {
    const { nome, login, senha } = request.body;
    const alterado_em = new Date();
    const criado_em = new Date();
    const user = {
      nome,
      login,
      senha,
      criado_em,
      alterado_em
    }




    database.insert(user)
      .table("usuarios")
      .then(() => {
        response.json(user);
      }).catch(error => {
        response.json({erro: 'Erro ao criar novo usuário', message: error.sqlMessage });
      });
  }

  listUsers(request, response) {
    database.select("*").table("usuarios").then(users => {
      response.json(users);
    }).catch(error => {
      response.json({erro: 'Erro ao listar usuários', message: error.sqlMessage });
    });
  }

  listUser(request, response) {
    const { email, senha } = request.query;
    database.select("*").table("usuarios")
      .where('login', email)
      .andWhere('senha', senha)
      .then(user => {
        if(user.length > 0 ){
          response.json(user);
        }
        else{
          response.json({erro: 'Usuário/Senha digitado errado'});
        }
      }).catch(error => {
        response.json({erro: 'Erro ao listar usuário', message: error.sqlMessage });
      });
  }

}

module.exports = new UserController();
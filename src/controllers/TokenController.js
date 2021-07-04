const database = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class TokenController {

  async createToken(request, response) {
    try{
      const { email, password } = request.body;
  
      if(!email || !password){
        return response.status(401).json({erro: 'Email e/ou senha não informado.', message: error.sqlMessage });
      }
      
      const administrator = await database.select("*").table("administrators").where('email', email);

      if(!administrator){
        return response.status(401).json({erro: 'Administrador não existente.', message: error.sqlMessage });
      }

      const pass = await bcrypt.compare(password, administrator[0].password);

      if(!pass){
        return response.status(401).json({erro: 'Senha de Administrador inválida.', message: error.sqlMessage });
      }

      const { id } = administrator[0];
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION
      });
  
      return response.json({ token });

    } catch(error){
      return response.json({erro: 'Erro ao buscar pelo Administrador.', message: error.sqlMessage });
    }
  }
  
}

module.exports = new TokenController();
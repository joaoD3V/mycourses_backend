const database = require('../database/connection');
const bcrypt = require('bcrypt');

class AdministratorController {
  async createAdministrator(request, response) {
    try{
      const { name, email, password } = request.body;
      const saltRounds = 10;
      const password_hash = bcrypt.hashSync(password, saltRounds);
      const created_at = new Date();
      const updated_at = new Date();
      const administrator = {
        name,
        email,
        password: password_hash,
        created_at,
        updated_at
      }
      
      const data = await database.insert(administrator).table("administrators");
      return response.json({id: data[0], ...administrator});

    }catch(error){
      return response.json({erro: 'Erro ao criar novo administrador.', message: error.sqlMessage });
    }
  }

  async listAdministrators(request, response) {
    try{
      const administrators = await database.select("*").table("administrators");
      return response.json(administrators);
    } catch (error){
      return response.json({erro: 'Erro ao listar administradores.', message: error.sqlMessage });
    }
  }

  async listAdministrator(request, response) {
    try{
      const { id } = request.params;
      
      const administrator = await database.select("*").table("administrators").where('id', id);
      return response.json(administrator);
    } catch(error) {
      return response.json({erro: 'Erro ao listar administrador.', message: error.sqlMessage });
    }
  }

  async updateAdministrator(request, response){
    try{
      const { id } = request.params;
      if(!id){
        return response.status(400).json({ erro: 'ID não informado.' });
      }

      const administrator = await database.select("*").table("administrators").where('id', id);

      if(!administrator){
        return response.status(400).json({ erro: 'Administrador não encontrado.' });
      }

      const data = request.body;
      if(data.hasOwnProperty('password')){
        const saltRounds = 10;
        const password_hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = password_hash;
      }
      const updated_at = new Date();
      const updateAdministrator = {
        ...data,
        updated_at
      }

     
      
      await database.table("administrators").where('id', id).update(updateAdministrator);
      const updated = await database.select("*").table("administrators").where('id', id);
      return response.json(updated);
    }catch(error){
      return response.json({erro: 'Erro ao atualizar administrador', message: error.sqlMessage });
    }

  }

  async deleteAdministrator(request, response){
    try{
      const { id } = request.params;
      if(!id){
        return response.status(400).json({ erro: 'ID não informado.' });
      }

      const administrator = await database.select("*").table("administrators").where('id', id);

      if(!administrator){
        return response.status(400).json({ erro: 'Administrador não encontrado.' });
      }

      
      await database.table("administrators").where('id', id).delete();
      return response.json(administrator);
    }catch(error){
      return response.json({erro: 'Erro ao deletar administrador.', message: error.sqlMessage });
    }
  }
  
}

module.exports = new AdministratorController();
const database = require('../database/connection');

class ModuleController {
  async createModule(request, response) {
    try{
      const { name } = request.body;
      const created_at = new Date();
      const updated_at = new Date();
      const module = {
        name,
        created_at,
        updated_at
      }
  
      const data = await database.insert(module).table("modules");
      return response.json({id: data[0], ...module});

    }catch(error){
      return response.json({erro: 'Erro ao criar novo módulo.', message: error.sqlMessage });
    }
  }

  async listModules(request, response) {
    try{
      const modules = await database.select("*").table("modules");
      return response.json(modules);
    } catch (error){
      return response.json({erro: 'Erro ao listar módulos.', message: error.sqlMessage });
    }
  }

  async listModule(request, response) {
    try{
      const { id } = request.params;
      
      const module = await database.select("*").table("modules").where('id', id);
      return response.json(module);
    } catch(error) {
      return response.json({erro: 'Erro ao listar módulo.', message: error.sqlMessage });
    }
  }

  async updateModule(request, response){
    try{
      const { id } = request.params;
      if(!id){
        return response.status(400).json({ erro: 'ID não informado.' });
      }

      const module = await database.select("*").table("modules").where('id', id);

      if(!module){
        return response.status(400).json({ erro: 'Módulo não encontrado.' });
      }

      const data = request.body;
      const updated_at = new Date();
      const updateModule = {
        ...data,
        updated_at
      }
      
      await database.table("modules").where('id', id).update(updateModule);
      const updated = await database.select("*").table("modules").where('id', id);
      return response.json(updated);
    }catch(error){
      return response.json({erro: 'Erro ao atualizar módulo', message: error.sqlMessage });
    }

  }

  async deleteModule(request, response){
    try{
      const { id } = request.params;
      if(!id){
        return response.status(400).json({ erro: 'ID não informado.' });
      }

      const module = await database.select("*").table("modules").where('id', id);

      if(!module){
        return response.status(400).json({ erro: 'Módulo não encontrada.' });
      }

      
      await database.table("modules").where('id', id).delete();
      return response.json(module);
    }catch(error){
      return response.json({erro: 'Erro ao deletar módulo', message: error.sqlMessage });
    }
  }
  
}

module.exports = new ModuleController();
const database = require('../database/connection');

class LessonController {
  async createLesson(request, response) {
    try{
      const { id_modules, name, video_url, startLessonDate } = request.body;
      const created_at = new Date();
      const updated_at = new Date();
      const lesson = {
        id_modules: Number(id_modules),
        name,
        video_url,
        startLessonDate: new Date(startLessonDate),
        created_at,
        updated_at
      }
  
      const data = await database.insert(lesson).table("lessons");
      return response.json({id: data[0], ...lesson});

    }catch(error){
      return response.json({erro: 'Erro ao criar nova aula.', message: error.sqlMessage });
    }
  }

  async listLessons(request, response) {
    try{
      const lessons = await database.select("*").table("lessons");
      return response.json(lessons);
    } catch (error){
      return response.json({erro: 'Erro ao listar aulas.', message: error.sqlMessage });
    }
  }

  async listLesson(request, response) {
    try{
      const { id } = request.params;
      
      const lesson = await database.select("*").table("lessons").where('id', id);
      return response.json(lesson);
    } catch(error) {
      return response.json({erro: 'Erro ao listar aula.', message: error.sqlMessage });
    }
  }

  async updateLesson(request, response){
    try{
      const { id } = request.params;
      if(!id){
        return response.status(400).json({ erro: 'ID não informado.' });
      }

      const lesson = await database.select("*").table("lessons").where('id', id);

      if(!lesson){
        return response.status(400).json({ erro: 'Aula não encontrada.' });
      }

      const data = request.body;
      const updated_at = new Date();
      const updateLesson = {
        ...data,
        updated_at
      }
      
      await database.table("lessons").where('id', id).update(updateLesson);
      const updated = await database.select("*").table("lessons").where('id', id);
      return response.json(updated);
    }catch(error){
      return response.json({erro: 'Erro ao atualizar aula', message: error.sqlMessage });
    }

  }

  async deleteLesson(request, response){
    try{
      const { id } = request.params;
      if(!id){
        return response.status(400).json({ erro: 'ID não informado.' });
      }

      const lesson = await database.select("*").table("lessons").where('id', id);

      if(!lesson){
        return response.status(400).json({ erro: 'Aula não encontrada.' });
      }

      
      await database.table("lessons").where('id', id).delete();
      return response.json(lesson);
    }catch(error){
      return response.json({erro: 'Erro ao deletar aula', message: error.sqlMessage });
    }
  }
  
}

module.exports = new LessonController();
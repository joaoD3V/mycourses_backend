const database = require('../database/connection');

class LessonController {
  async createLesson(request, response) {
    const { moduleID, name, videoURL, startLessonDate } = request.body;
    const created_at = new Date();
    const updated_at = new Date();
    const lesson = {
      id_modules: Number(moduleID),
      name,
      video_url: videoURL,
      startLessonDate: new Date(startLessonDate),
      created_at,
      updated_at
    }

    await database.insert(lesson)
      .table("lessons")
      .then(() => {
        response.json(lesson);
      }).catch(error => {
        response.json({erro: 'Erro ao criar nova aula', message: error.sqlMessage });
      });
  }

  listRecepies(request, response) {
    const { userid } = request.query;
    database.select("*").table("receitas")
      .where('id_usuarios', userid)
      .then(recepies => {
        if(recepies.length > 0 ){
          response.json(recepies);
        }
        else{
          response.json({erro: 'Nenhuma receita cadastrada'});
        }
      }).catch(error => {
        response.json({erro: 'Erro ao listar receitas', message: error.sqlMessage });
      });
  }

  listRecepie(request, response) {
    const { userid, recepieid } = request.query;
    database.select("*").table("receitas")
      .where('id', recepieid)
      .andWhere('id_usuarios', userid)
      .then(recepie => {
        if(recepie.length > 0 ){
          response.json(recepie);
        }
        else{
          response.json({erro: 'Receita não encontrada'});
        }
      }).catch(error => {
        response.json({erro: 'Erro ao listar receita', message: error.sqlMessage });
      });
  }

  updateRecepie(request, response){
    const { userID, recepieID, categoryID, nameRecepie, time, portions, preparation, ingredients } = request.body;
    const alterado_em = new Date();
    const updateRecepie = {
      id_categorias: Number(categoryID),
      nome: nameRecepie,
      tempo_preparo_minutos: Number(time),
      porcoes: Number(portions),
      modo_preparo: preparation.join(','),
      ingredientes: ingredients.join(','),
      alterado_em
    }
    database.update(updateRecepie)
    .table("receitas")
    .where('id', recepieID)
    .andWhere('id_usuarios', userID)
    .then(() => {
      response.json(updateRecepie);
    }).catch(error => {
      response.json({erro: 'Erro ao atualizar receita', message: error.sqlMessage });
    });

  }

  deleteRecepie(request, response){
    const { userid, recepieid } = request.query;
    database.del().table("receitas")
        .where('id', recepieid)
        .andWhere('id_usuarios', userid)
        .then(() => {
          response.json({success: 'Receita excluída com sucesso'});
        }).catch(error => {
          response.json({erro: 'Erro ao excluir receita', message: error.sqlMessage });
        });
  }
  
  listRecepieSearchName(request, response){
    const { userid, namerecepie } = request.query;
    database.select("*").table("receitas")
      .where('id_usuarios', userid)
      .andWhere('nome', 'like', `${namerecepie}%`)
      .then(recepie => {
        if(recepie.length > 0 ){
          response.json(recepie);
        }
        else{
          response.json({erro: 'Receita não encontrada'});
        }
      }).catch(error => {
        response.json({erro: 'Erro ao listar receita', message: error.sqlMessage });
      });    
  }

}

module.exports = new LessonController();
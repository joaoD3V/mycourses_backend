const database = require('../database/connection');

class CategoryController {
  
  listCategories(request, response) {
    database.select("*").table("categorias").then(categories => {
      response.json(categories);
    }).catch(error => {
      response.json({erro: 'Erro ao listar categorias', message: error.sqlMessage });
    });
  }

}

module.exports = new CategoryController();
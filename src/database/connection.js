var knex = require('knex')({
  client: 'mysql2',
  connection: {
      host : 'localhost',     
      user : 'root',       
      password : 'root',
      database : 'teste_receitas_rg_sistemas'
   }
});
module.exports = knex
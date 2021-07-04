const dotenv = require('dotenv');
dotenv.config();

var knex = require('knex')({
  client: process.env.DATABASE_CLIENT,
  connection: {
      host : process.env.DATABASE_HOST,     
      user : process.env.DATABASE_USER,       
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE
   }
});
module.exports = knex
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


module.exports = (request, response, next) => {
  const { authorization } = request.headers;

  if(!authorization){
    return response.status(401).json({ erro: 'Autenticação requerida.' })
  }

  const [text, token] = authorization.split(' ');

  try{
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;
    request.administratorId = id;
    request.administratorEmail = email;
    return next();
  } catch(error){
    return response.status(401).json({ erro: 'Token inválido ou expirado.' })
  }


}
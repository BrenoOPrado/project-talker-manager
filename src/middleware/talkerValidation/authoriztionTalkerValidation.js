module.exports = function authoriztionTalkerValidation(req, res, next) {
    const header = req.headers;
     
    if (!header.authorization || header.authorization.length <= 0) {
       return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (header.authorization.length !== 16) {
       return res.status(401).json({
          message: 'Token inválido',
       });
    }
    next();
};
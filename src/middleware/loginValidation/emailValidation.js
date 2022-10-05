module.exports = function emailValidation(req, res, next) {
   const { email } = req.body;
    
    if (!email || email.length <= 0) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!email.includes('@') || !email.endsWith('.com')) {
      return res.status(400).json({
         message: 'O "email" deve ter o formato "email@email.com"',
      });
    }
    next();
 };
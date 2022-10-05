module.exports = function newTalkerValidation(req, res, next) {
    const body = req.body;
    const header = req.headers;
     
    if (!header.authorization || header.authorization.length <= 0) {
       return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (header.authorization.length !== 16) {
       return res.status(401).json({
          message: 'Token inválido',
       });
    }
// ----------------------------------------------------------------------------
    if (!body.name || body.name.length <= 0) {
        return res.status(400).json({
            message: 'O campo "name" é obrigatório',
        });
    }
    if (body.name.length < 3) {
        return res.status(400).json({
            message: 'O "name" deve ter pelo menos 3 caracteres',
        });
    }
// ----------------------------------------------------------------------------
    if (!body.age || body.age.length <= 0) {
        return res.status(400).json({
            message: 'O campo "age" é obrigatório',
        });
    }
    if (+(body.age) < 18) {
        return res.status(400).json({
            message: 'A pessoa palestrante deve ser maior de idade',
        });
    }
// ----------------------------------------------------------------------------
    if (!body.talk) {
        return res.status(400).json({
            message: 'O campo "talk" é obrigatório',
        });
    }

    if (!body.talk.rate ||
        JSON.stringify(body.talk.rate).length <= 0) {
            return res.status(400).json({
                message: 'O campo "rate" é obrigatório',
            });
    }
    if (body.talk.rate < 1 || body.talk.rate > 5) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        });
    }

    if (!body.talk.watchedAt ||
    body.talk.watchedAt.length <= 0) {
        return res.status(400).json({
            message: 'O campo "watchedAt" é obrigatório',
        });
    }
    const { z } = require('zod');
    if (!z.date().safeParse(body.talk.watchedAt).success) {
        return res.status(400).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }
     next();
  };
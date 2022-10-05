module.exports = function nameTalkerValidation(req, res, next) {
    const body = req.body;
     
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
    next();
}
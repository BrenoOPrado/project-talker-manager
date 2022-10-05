module.exports = function talkRateTalkerValidation(req, res, next) {
    const body = req.body;
     
    if (!body.talk) {
        return res.status(400).json({
            message: 'O campo "talk" é obrigatório',
        });
    }

    if (!body.talk.rate
    || JSON.stringify(body.talk.rate).length <= 0) {
            return res.status(400).json({
                message: 'O campo "rate" é obrigatório',
            });
    }
    if (body.talk.rate < 1 || body.talk.rate > 5) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        });
    }
    next();
}
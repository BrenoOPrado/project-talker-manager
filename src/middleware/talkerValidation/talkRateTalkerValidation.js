module.exports = function talkRateTalkerValidation(req, res, next) {
    const { talk: { rate } } = req.body;
    
    if (rate === undefined || JSON.stringify(rate).length <= 0) {
            return res.status(400).json({
                message: 'O campo "rate" é obrigatório',
            });
    }
    if (+(rate) < 1 || +(rate) > 5) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        });
    }
    next();
};
module.exports = function talkWatchedAtTalkerValidation(req, res, next) {
    const body = req.body;
    const { talk: { watchedAt } } = body;

    if (!watchedAt
        || watchedAt.length <= 0) {
        return res.status(400).json({
            message: 'O campo "watchedAt" é obrigatório',
        });
    }
    const dateLength = 10;
    const regex = /(\d{2}?\/\d{2}?\/\d{4}?)/g;
    if (watchedAt.length !== dateLength
        || !watchedAt.match(regex)) {
        return res.status(400).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }
    next();
}
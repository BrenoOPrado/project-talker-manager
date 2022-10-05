const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const talkerPath = path.resolve(__dirname, '..', 'talker.json');

const ageTalkerValidation = require(
    '../middleware/talkerValidation/ageTalkerValidation',
);
const authoriztionTalkerValidation = require(
    '../middleware/talkerValidation/authoriztionTalkerValidation',
);
const nameTalkerValidation = require(
    '../middleware/talkerValidation/nameTalkerValidation',
);
const talkTalkerValidation = require(
    '../middleware/talkerValidation/talkTalkerValidation',
);
const talkRateTalkerValidation = require(
    '../middleware/talkerValidation/talkRateTalkerValidation',
);
const talkWatchedAtTalkerValidation = require(
    '../middleware/talkerValidation/talkWatchedAtTalkerValidation',
);

const middlewareArray = [
    authoriztionTalkerValidation,
    ageTalkerValidation,
    nameTalkerValidation,
    talkTalkerValidation,
    talkRateTalkerValidation,
    talkWatchedAtTalkerValidation,
];

router.get('/', async (_req, res) => {
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    if (talkers.length > 0) {
        res.status(200).json(talkers);
    } else {
        res.status(200).json([]);
    }
});

router.get('/search', authoriztionTalkerValidation,
async (req, res) => {
    const { q } = req.query;
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    if (!q || q === undefined) return res.status(200).json(talkers); 
    const talkerArray = talkers.filter((t) => t.name.includes(q));
    return res.status(200).json(talkerArray);
});

router.get('/:id', async (req, res) => {
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    const { id } = req.params;
    const index = talkers.findIndex((item) => item.id === +(id));
    if (index < 0) {
        res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } else {
        res.status(200).json(talkers[index]);
    }
});

router.post('/', ...middlewareArray, async (req, res) => {
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    const talkerBody = req.body;
    const newTalker = {
        ...talkerBody,
        id: (talkers.length + 1),
    };
    talkers.push(newTalker);
    await fs.writeFile(talkerPath, JSON.stringify(talkers));
    return res.status(201).json(newTalker);
});

router.put('/:id', ...middlewareArray, async (req, res) => {
    const { id } = req.params;
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    const index = talkers.findIndex((item) => item.id === parseInt(id, 10));
    const newTalker = { ...req.body };
    talkers[index] = { ...newTalker, id: talkers[index].id };
    await fs.writeFile(talkerPath, JSON.stringify(talkers));
    res.status(200).json(talkers[index]);
});

router.delete('/:id', authoriztionTalkerValidation, async (req, res) => {
    const { id } = req.params;
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    const talker = talkers.find((t) => t.id === parseInt(id, 10));
    if (talker) {
      const index = talkers.indexOf(talker);
      talkers.splice(index, 1);
    }
    await fs.writeFile(talkerPath, JSON.stringify(talkers));
    res.sendStatus(204);
});

module.exports = router;
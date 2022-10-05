const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const talkerPath = path.resolve(__dirname, '..', 'talker.json');

router.get('/', async (_req, res) => {
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    if (talkers.length > 0) {
        res.status(200).json(talkers);
    } else {
        res.status(200).json([]);
    }
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

const ageTalkerValidation = require(
    '../middleware/talkerValidation/ageTalkerValidation',
);
const authoriztionTalkerValidation = require(
    '../middleware/talkerValidation/authoriztionTalkerValidation',
);
const nameTalkerValidation = require(
    '../middleware/talkerValidation/nameTalkerValidation',
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
    talkRateTalkerValidation,
    talkWatchedAtTalkerValidation,
];

router.post('/', ...middlewareArray, async (req, res) => {
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    const talkerBody = req.body;
    const newTalker = {
        ...talkerBody,
        id: (talkers.length + 1)
    }
    talkers.push(newTalker);
    console.log(newTalker);
    await fs.writeFile(talkerPath, JSON.stringify(talkers));
    return res.status(201).json(newTalker);
});

module.exports = router;
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
    const id = req.params.id;
    const index = talkers.findIndex((item) => item.id === parseInt(id));
    if (index < 0) {
        res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } else {
        res.status(200).json(talkers[index]);
    }
});

module.exports = router;
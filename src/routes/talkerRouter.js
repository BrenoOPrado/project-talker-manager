const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const talkerPath = path.resolve(__dirname,'..', 'talker.json');

router.get('/', async (req, res) => {
    const talkers = JSON.parse(await fs.readFile(talkerPath, 'utf8'));
    if(talkers.length > 0) {
        res.status(200).json(talkers);
    } else {
        res.status(200).json([]);
    }
});

module.exports = router;
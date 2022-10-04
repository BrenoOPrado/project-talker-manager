const express = require('express');

const router = express.Router();

router.post('/', async (_req, res) => {
    let token = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i += 1) {
        token += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    res.status(200).json({ token });
});

module.exports = router;
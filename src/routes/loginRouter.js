const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

router.post('/', async (_req, res) => {
    let token = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 16; i++) {
        token += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    console.log(token.length);
    res.status(200).json({ token });
});

module.exports = router;
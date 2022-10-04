const express = require('express');
const emailValidation = require('../middleware/emailValidation');
const passwordValidation = require('../middleware/passwordValidation');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, async (_req, res) => {
    let token = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i += 1) {
        token += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    res.status(200).json({ token });
});

module.exports = router;
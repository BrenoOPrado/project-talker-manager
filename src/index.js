const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// ------------------------------------------------------------------------

const talkerRouter = require('./routes/talkerRouter');
const loginRouter = require('./routes/loginRouter');

app.use(express.json());

app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

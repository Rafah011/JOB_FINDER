const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Esta funcionando na porta ${PORT}`);
});

// body parser

app.use(bodyParser.urlencoded({ extended: false }));

// handle bars

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// DB Connection

db
    .authenticate()
    .then(() => {
        console.log('Conectou com o banco com sucesso');
    })
    .catch(err => {
        console.log('Ocorreu um erro ao tentar se conectar', err);
    });

// Routes

app.get('/', (req, res) => {
    res.send('Funcinando')
});

// Jobs routes
app.use('/jobs', require('./routes/jobs'))
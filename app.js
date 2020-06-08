const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configs
    app.use(bodyParser.urlencoded( { extended: false } ));
    app.use(bodyParser.json());
// Rotas
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html");
    });

    app.get('/home', (req, res) => {
        res.send('Essa eh a home!');
    });

var port = 3000;
app.listen(port, () => {
    console.log('Iniciado com sucesso!');
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configs
    app.use(bodyParser.urlencoded( { extended: false } ));
    app.use(bodyParser.json());
// Rotas
    function rota (folder, archive){
        app.get(folder, (req, res) => {
            res.sendFile(__dirname + archive);
        })
    }

    /*app.get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html");
    });*/

    rota(home, "/index.html");

    app.get('/home', (req, res) => {
        res.send('Essa eh a home!');
    });

    app.get('/brenda_page', (req, res) => {
        res.sendFile(__dirname + "/outroIndex.html")
    })

var port = 3000;
app.listen(port, () => {
    console.log('Iniciado com sucesso!');
})
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const hbsOptions = {
    title: "Road Trip by TEMPLATED",
    head: "Road Trip"
};

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use( express.static( 'public' ));

app.get('/', (req, res) => {

    //renderiza la vista con hbs
    res.render('home', hbsOptions)
});

app.get('/generic', (req, res) => {
    res.render('generic', hbsOptions)
});

app.get('/elements', (req, res) => {
    res.render('elements', hbsOptions)
});

app.get('*', (req, res) => {
    res.render('404')
});

app.listen(port, () => {
    console.log('localhost en el puesto', port);
})

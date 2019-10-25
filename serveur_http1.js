var express = require('express');
var app = express();
var session = require('cookie-session');
"liste"

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    req.session.liste = [];

    next();
    res.send(404, 'Page introuvable !');
});

app.get('/liste', function(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // res.json({
    //     "liste": [{
    //         Objet1: "Johnny",
    //         Objet2: "Eddy",

    //     }]
    // });
    res.send({ "liste": req.session.liste });
});

app.post('/liste/ajouter', function(req, res) {

    res.session.liste.push(req.data.info_val.valeur);
    res.redirect('/liste');


});



app.listen(8080);
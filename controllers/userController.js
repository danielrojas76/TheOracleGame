let fs = require('fs');
let path = require('path')

let userController = {
    home: function(req, res){
        res.render('index')
    },
    form: function(req, res){
        res.render('createQuestion');
    },


    gamer:function(req, res){
        usuario = {
            gamer: req.body.nombre  
        }

        let gamer = [];

        gamer.push(usuario)

        /* const jsonData = fs.readFileSync(path.join(__dirname, '../data/usuarios.json')) */

        let usuarioJSON = JSON.stringify(gamer); 

        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json', usuarioJSON)); 

        res.redirect('/game')
    },

    create: function(req, res){
        pregunta = {
            pregunta: req.body.pregunta,
            opcion: [req.body.opcion1, req.body.opcion2, req.body.opcion3],
            respuestaCorrecta: req.body.respuestaCorrecta
        }

        let archivoPregunta = fs.readFileSync('preguntas.json', 'utf-8');
        let preguntas;
        if(archivoPregunta == ""){
            preguntas = [];
        } else {
            preguntas = JSON.parse(archivoPregunta)
        };

        preguntas.push(pregunta)

        let preguntasJSON = JSON.stringify(preguntas); 

        fs.writeFileSync('preguntas.json', preguntasJSON); 

        res.redirect('/')
    }
}

module.exports = userController;
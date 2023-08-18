let fs = require('fs');
let path = require('path');

let gameController = {

    game: function (req, res) {
        //--leemos los json
        let preguntaJSON = fs.readFileSync(path.join(__dirname, ('../data/preguntas.json')), 'utf-8');
        let usuarioJSON = fs.readFileSync(path.join(__dirname, ('../data/usuario.json')), 'utf-8');
        //--convertir los json
        let pregunta = JSON.parse(preguntaJSON)
        let gamer = JSON.parse(usuarioJSON);
        //--respondo con la vista "game" y la variables
        console.log(req.query.index)
        res.render('game', { usuario: gamer, preguntas: pregunta, index: req.query.index})
    },

    result: function (req, res) {
        let preguntaJSON = fs.readFileSync(path.join(__dirname, ('../data/preguntas.json')), 'utf-8');
        let pregunta = JSON.parse(preguntaJSON)
        /* let respuestaCorrecta = pregunta[0].respuestaCorrecta */
        
        let usuarioJSON = fs.readFileSync(path.join(__dirname, ('../data/usuario.json')), 'utf-8');
        let gamer = JSON.parse(usuarioJSON);
        
        //preguntas y respuestas
        let index = 0;
        let score = 0;
       
        let question = pregunta[index].pregunta;
        let questionOpcion = pregunta[index].opciones;
        let correctAnswer =  pregunta[index].respuestaCorrecta;
        
        if(index > pregunta.length){
            res.render('game', { usuario: gamer, pregunta: question, respuesta: questionOpcion});
        } else{
           if (correctAnswer == req.body.respuesta){
            
                    index+=1
                    score+=1
                    console.log(index)
                    res.redirect('/game?index=' + index)
                }     
        } 
        //logica 
        
        /* if (respuesta == respuesta) {
            let respuesta = pregunta[0].respuestaCorrecta;
            if (pregunta.length == 0) {
                res.send('ganaste');
            } else {
                res.render('game', { usuario: gamer, preguntas: pregunta})
            }
        } else {
            res.render('game', { usuario: gamer, preguntas: pregunta})
        } */

    }
}

module.exports = gameController
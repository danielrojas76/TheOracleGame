let fs = require('fs');

let gameController = {

    game: function (req, res) {
        let preguntaJSON = fs.readFileSync('preguntas.json', 'utf-8');

        let usuarioJSON = fs.readFileSync('usuario.json', 'utf-8');

        let pregunta = JSON.parse(preguntaJSON)

        let gamer = JSON.parse(usuarioJSON);

        res.render('game', { usuario: gamer, preguntas: pregunta })
    },

    result: function (req, res) {
        let preguntaJSON = fs.readFileSync('preguntas.json', 'utf-8');
        let pregunta = JSON.parse(preguntaJSON)
        let respuesta =pregunta[0].respuestaCorrecta;
        /* let respuestaCorrecta = pregunta[0].respuestaCorrecta */

        let usuarioJSON = fs.readFileSync('usuario.json', 'utf-8');
        let gamer = JSON.parse(usuarioJSON);

        //logica 

        if (respuesta == respuesta) {
            pregunta.shift()
            if (pregunta.length == 0) {
                res.send('ganaste');
            } else {
                res.render('game', { usuario: gamer, preguntas: pregunta })
            }
        } else {
            res.render('game', { usuario: gamer, preguntas: pregunta })
        }
    }
}

module.exports = gameController
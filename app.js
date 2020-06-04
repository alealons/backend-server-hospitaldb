// Requires

var express = require('express');
var mongoose = require('mongoose');

// Iniciarlizar Variables

var app = express();

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( err, res) => {
    if (err) {
        throw err; // El Throw hace que lo demas jamas se ejecute   
    }
    console.log(err);
})


// Rutas

app.get('/', (req, res, next) => {

    res.status(200).json({
        ok:true,
        mensaje: 'Peticion Realizada Correctamente'
    })

} );

app.listen(3000, () => {
    console.log('Express Server Corriendo en Puerto 3000');
})



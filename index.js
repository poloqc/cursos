
// File System

//const fs = require('fs');

// Crear archivos
/*fs.writeFile('./texto.txt', 'Linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
})
*/

// Leer archivos

/*
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})




console.log('Ultima Linea de Código');
*/
// Dos partes hasta aquí 


//////////////////// FORMA DE CREAR SERVIDOR CON CODIGO JSON /////////////////////
/*
// Importamos http
const http = require('http');

// Funcion para manejo del servidor requerimiento y respuesta
const handleServer = function(req, res){
    // Tipo de estado y tipo de documento
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hola mundo desde Nodejs</h1>');
    res.end();
}

// Creamos el servidor, ejecuta la funcion anterior y me devuelve un objeto server
const server = http.createServer(handleServer);

// Llamamos al metodo del servidor haciendo uso de nuestro objeto server
server.listen(3000, function(){
    console.log('Server on port 3000')
})
*/
///////////////////////////////////////////////////////////////////////////////////

const colors = require('colors');
const express = require('express');
const server = express();

// Cuando soliciten la raiz, enviar hola mundo
server.get('/', function(req, res){
res.send('<H1>Hola mundo con Express</H1>');
res.end();
});

server.listen(3000, function(){
    console.log('Server on port 3000'.red);
});
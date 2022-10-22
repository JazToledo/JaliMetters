const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env')});
const routes = require('./routes/Usuarios.routes');

const app = express();

// Configuracion (3)
app.set('port', 3000);
app.set('views', path.join(__dirname, '/views')); // ingresar al directorio de la carpeta views
app.set('view engine', 'ejs'); // definiendo el motor de plantillas ejs

// middlewares (3)
app.set(morgan('dev'));
app.use(express.urlencoded( { extended : false } ));
app.use(express.json());

// Cookies

// Rutas estaticas (1)
app.use(express.static('src/public'));

// Rutas (1)
app.use('/', routes);

// Inicializar servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor funcionando en el puerto ${app.get('port')}`);
});

module.exports = app;
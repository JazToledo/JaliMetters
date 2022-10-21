const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '300121',
    database: 'jalimetters'
});

connection.connect((error) => {
    if (error) {
        console.log(`Hay error en la conexion: ${error}`);
        return;
    }
    console.log('Conexion con la BD establecida');
});

module.exports = connection;
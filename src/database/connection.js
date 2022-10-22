const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        console.log(`Hay error en la conexion: ${error}`);
        return;
    }
    console.log('Conexion con la BD establecida');
});

module.exports = connection;
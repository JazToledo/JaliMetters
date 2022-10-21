const { Router } = require('express');
const app = require('../app')

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index');
});


module.exports = routes;
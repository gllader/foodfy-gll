const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const server = express();
const methodOverride = require('method-override');
const PORT = 5000;

server.set('view engine', 'njk');
server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));
server.use(methodOverride('_method'));
server.use(routes);

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

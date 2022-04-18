let express = require('express');
let app = express();
const PORT = 8001;
let path = require('path');

//middlewares
app.use(express.static('public'));

//Routes-rutas
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html')) //write permite varias lineas el send corta la ejecucuion de otras lineas
    //res.write - res.end()cortamos
})

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})



//Server-servidor
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT} -> http://localhost:${PORT}`))
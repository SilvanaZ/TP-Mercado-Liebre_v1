const express = require('express');
const app = express();
const PORT = 3000;
let path = require('path')

//middlewares
app.use(express.static('public'))

//rutas
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

app.listen(PORT, ()=>  console.log(`
servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
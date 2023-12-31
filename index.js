const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.listen(4000, () => {
    console.log('Aplicación corriendo en el puerto 4000');
});
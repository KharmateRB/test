const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const routes = require('./router');
const port = 8081;

const app = express();
routes(app);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile();
});

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})
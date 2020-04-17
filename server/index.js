const path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const port = SERVER_PORT;
const resultsCtrl = require('./resultsCtrl');

app.use(cors());
app.use(express.json());

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('database connected');
    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    })
})

app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

//ENDPOINTS
app.post('/api/results', resultsCtrl.results);
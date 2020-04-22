require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const port = SERVER_PORT;
const resultsCtrl = require('./resultsCtrl');
const authCtrl = require('./authCtrl');

app.use(cors());
app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(db => {
    app.set('db', db);
    console.log('database connected');
    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    })
})
.catch(err => console.log(err));

app.use( express.static( `${__dirname}/../build` ) );

//ENDPOINTS
app.post('/api/results', resultsCtrl.results);
app.get('/api/results-list', resultsCtrl.getResults);
app.post('/auth/password', authCtrl.auth);
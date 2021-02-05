const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', async function(req, res) {
    const endpoint = 'https://api.yelp.com/v3/businesses/search?term=coffee&latitude=36.1699&longitude=-115.1398';
    const result = await fetch(endpoint, {
        method: 'get',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer I7CvrGWm5eAi1Tt9y7GwSAXlii94lGsW_izroqmdx7E2DA72K766fKoV6M9eHcyWDEYxnW4KzIrBxrMl5qvvXLQwURwGuLaIBBWEhqP6A8of1tWNIE287dTlqGQcYHYx'
         },
        
    }).then(response => response.json());
    res.send(result);
 });

module.exports = app;
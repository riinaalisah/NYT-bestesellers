import express from 'express';

const port = 3001;
const app = express();
const axios = require('axios');

app.get('/lists', (req, res) => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=9rvjCt0CPSYHVDK2iPtDDsAeWaV51v3s')
        .then(response => {
            res.json({ lists: response.data.results })
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/history', (req, res) => {
    
    axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=9rvjCt0CPSYHVDK2iPtDDsAeWaV51v3s')
        .then(response => {
            res.json({ bestsellers: response.data.results })
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
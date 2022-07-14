"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3001;
const app = (0, express_1.default)();
const axios = require('axios');
app.get('/lists', (req, res) => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=9rvjCt0CPSYHVDK2iPtDDsAeWaV51v3s')
        .then(response => {
        res.json({ lists: response.data.results });
    })
        .catch(error => {
        console.log(error);
    });
});
app.get('/history', (req, res) => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=9rvjCt0CPSYHVDK2iPtDDsAeWaV51v3s')
        .then(response => {
        res.json({ bestsellers: response.data.results });
    })
        .catch(error => {
        console.log(error);
    });
});
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
//# sourceMappingURL=index.js.map
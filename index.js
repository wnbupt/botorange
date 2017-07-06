const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('./view'));

const port = 8888;

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port}`)
});
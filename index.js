// creating express server
const express = require('express');
const path = require('path');
const members = require('./members');
const logger = require('./middleware/logger');

const app = express();

//app.use(logger);

const PORT = process.env.PORT || 5000;

app.get('/api/members', (req, res) => {
    res.json(members);
});

app.get('app/members/:id', (req, res) => {
    res.json();
});

// set static folder, meaning it just get data into browser from file name in url (/about.html => about.html) 
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // geting current directory, going to a folder public, load file called index.html
});
*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


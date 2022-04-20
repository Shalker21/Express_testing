// creating express server
const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // geting current directory, going to a folder public, load file called index.html
});
*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


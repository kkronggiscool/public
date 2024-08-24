const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); // Using 'html' for simplicity

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for the secret page
app.get('/secretpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'secretpage.html'));
});

app.get('/secretpage/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'secretpage1.html'));
});

app.get('/easteregg', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'easteregg.html'));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

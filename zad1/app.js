const express = require('express');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Home');
});
app.get('/success', (req, res) => {
    res.render('Success');
});
app.get('/students-list', (req, res) => {
    res.render('List');
});
app.get('/add-student', (req, res) => {
    res.redirect('/students-list');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

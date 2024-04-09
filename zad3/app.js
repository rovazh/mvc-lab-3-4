const express = require('express');
const { getNotFoundPage } = require('./controllers/error');
const studentsRouter = require('./routes/students');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(studentsRouter);
app.use(getNotFoundPage);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

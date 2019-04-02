const express = require('express');
const app = express();
const notebooks = require('./routes/notebooks');
const home = require('./routes/home');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/notebooks', notebooks);
app.use('/', home);

mongoose.connect('mongodb://localhost/notebooks', {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

    // Schema will soon appear

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
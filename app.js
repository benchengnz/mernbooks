// app.js

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/api/books');
connectDB();
app.get('/', (req, res) => res.send('Hello world! Now you see me @@ 2.'));

app.use('/api', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
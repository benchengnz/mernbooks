// app.js
require("dotenv").config()
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require("path")

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));

app.use(express.static(path.join(__dirname, "mern_client", "build")))

// use Routes
app.use('/api/books', books);

// modified the file for testing

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
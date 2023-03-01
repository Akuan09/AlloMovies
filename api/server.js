const express = require('express');
const cors = require('cors');
const api = express();
const port = 8080;

api.use(express.json());
api.use(express.urlencoded({extends:true}));

api.use(cors("*"));

const movies = require('./routers/movies.js');
api.use('/movies',movies);

const categories = require('./routers/categories.js');
api.use('/categories',categories);

const directors = require('./routers/directors.js');
api.use('/directors',directors);

const movies_categories = require('./routers/movies_categories.js');
api.use('/movies_categories',movies_categories);

api.listen(port, () => console.log(`Server start on port ${port}`));
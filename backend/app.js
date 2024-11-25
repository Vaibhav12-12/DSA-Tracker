const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//Setup dotenv
dotenv.config();

const app = express();

//Use cors and json parser
app.use(cors());
app.use(express.json());

//Test route
app.get('/', (req, res) => res.send('Server is Working!'));

//Port setting and server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

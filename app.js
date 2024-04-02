const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/conn');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('./uploads'));
app.use('/files', express.static('./public/files'));


app.get('/', (req, res) => {
    res.status(201).json('server start');
})

app.use(require('./routes/userRoutes'));

app.listen(8080, () => {
    console.log(`server started on port ${PORT}`);
})


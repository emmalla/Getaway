// const http = require('http');
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');



// require('dotenv').config();


const port = 3000;

// const server = http.createServer(app);

//server.listen(port);

const express = require('express');
const app = express();
app.listen(port);

const flightRoutes = require('./API/routes/flights');

app.use('/flights', flightRoutes);

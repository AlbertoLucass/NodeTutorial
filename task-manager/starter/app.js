const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('../starter/db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(errorHandlerMiddleware);
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on port ${port}`));
        
    } catch (error) {
        console.log(error);
    }
}

start();

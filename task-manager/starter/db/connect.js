const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://alberto:M67pJsPxVcNGZgBJ@node-express-course.pqh97ss.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=Node-express-course'

mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.log(err))
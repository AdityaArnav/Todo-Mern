// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const cors  = require('cors');

// const routes = require("./routes/ToDoRoutes")

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use(routes);
// const PORT = process.env.PORT || 5000;
// mongoose
//     .connect(process.env.Mongo_URL)
//     .then(()=>console.log("MongoDb Connected"))
//     .catch((err)=>console.error(err));

// app.listen(PORT,()=>{
//     console.log(`App listening on port ${PORT}`);
// })


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();


// using express.json() to get data into json format
app.use(express.json());

// using cors to send data from react to our server and to allow access from diffrent address
app.use(cors());


// PORT - ----using dotenv file help us to hide our secret data like port, database credentials and secret keys..
const PORT = process.env.PORT || 5500;

// importing routes
const TodoItemRoute = require('./routes/todoRoutes')

app.use('/',TodoItemRoute);

// connecting to mongodb...
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err));

// Adding port and connecting it to server
app.listen(PORT,()=>console.log(`server connected to ${PORT}`));
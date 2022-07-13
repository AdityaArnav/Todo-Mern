const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors  = require('cors');

const routes = require("./routes/ToDoRoutes")

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.Mongo_URL)
    .then(()=>console.log("MongoDb Connected"))
    .catch((err)=>console.error(err));

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})
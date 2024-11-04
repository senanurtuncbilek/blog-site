const express = require("express");
const app = express();
const mongoose = require('mongoose'); //mongodb


const Post = require('./models/post');

const pageRouter = require('./router/pageRouter');

require('dotenv').config();


mongoose.connect('mongodb://localhost/cleanblog-test-db'); //mongodb connection

app.use(express.static('public'));
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true  })); //gelen form ve json verilerini almak için middleware
// parse application/json
app.use(express.json());



app.use('/', pageRouter);


app.listen(process.env.PORT || 3000, ()=>{
  
    console.log("3000 portu dinleniyor..");
});
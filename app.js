const express = require('express');
const app = express();
const mongoose =require ('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
require('dotenv/config');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute)

//routes
app.get('/',(req, res)=>{
    res.send('We are on home');
});


//connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=> console.log('connected to db!')
);

//listening to server
app.listen(3000); 
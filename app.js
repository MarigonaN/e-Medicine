const express = require("express");
const app = express()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
app.use(cookieParser())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/e-Medicine', {useNewUrlParser : true}, ()=>{
    console.log('successfully connected to databasee')
})
const User = require('./models/User')

const userInput = {
    username: "Marigona",
    password: "1234567",
    role: "admin"
}
const user = new User(userInput);
user.save((err, document)=>{
    if(err)
    console.log(err);
    console.log(document);
})
app.listen(3000, ()=>{
    console.log('express server started')
})
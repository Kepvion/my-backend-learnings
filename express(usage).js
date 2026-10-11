const express = require('express')

const app = express()

app.use(function(req,res,next){
  console.log("hello from middleware");
  next();
});

app.use(function(req,res,next){
  console.log("hello from middleware");
  next();
});

app      .get("/",function(req,res){
  res.send("hello guyss");
});

app.get("/profile",function(req,res){
  res.send("hellow guys this is your profile");
});


app.listen(3000);
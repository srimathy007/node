const express=require("express")
const app  = express()
const path =require("path")
const books=require("./routes/routes")
const authorapi=require("./routes/routrs1")
const api = require('./mongoapi/peopleapi')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sterling');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});

app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/scripts")))
app.use(express.static(path.join(__dirname,"public/pages")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.use("/books",books)
app.use("/authorapi",authorapi)
app.use("/api",api)
app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/home.html"))
})

app.listen(4000,function(){
    console.log("server started on port number 4000")
})
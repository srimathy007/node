var people = require("./people")
var route = require('express').Router()

route.get("/all",function(request,response){
    people.find({},{_id:0},function(err,data){
        if(err)
              response.status(500).send("Server error")
        else
              response.json(data)
    })
})

route.post("/all",function(request,response){
    people.insertMany(request.body,function(err,data){
        if(err)
              response.status(500).send("Server error")
        else
              response.json("successfully inserted")
    })
})

module.exports=route
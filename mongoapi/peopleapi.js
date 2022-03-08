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
              response.json(data)
    })
})


route.delete("/all",function(request,response){
    people.deleteMany({sno:{$gte:4}},function(err,data){
        if(err){
            console.log(err);
            response.status(500).send("Server error")
        }

        else
              response.json("successfully deleted")
    })
})

route.put("/all",function(request,response){
    people.updateOne(request.body,function(err,data){
        if(err)
              response.status(500).send("Server error")
        else
              response.json("successfully updated")
    })
})
module.exports=route
const dbops = require("../database/dbops")
const express = require("express")
const route = express.Router()

route.post("/store", function (request, response) {
  const data =
  {
    sno: request.body.sno,
    name: request.body.name,
    city: request.body.city
  }
  dbops.insert(data.sno, data.name, data.city, function (err, data) {
    if (err) {
      console.log(err);
      response.status(500).send("Unable to insert")
    }
    else
      response.send("data Successfully inserted")
  })
})

route.get("/report", function (request, response) {
  dbops.getPeople(function (err, data) {
    if (err) {
      console.log(err);
      response.send("Unable to load data")
    }
    else
      response.render("people", { people: data, programmer: "sri" })
  })
})

module.exports = route
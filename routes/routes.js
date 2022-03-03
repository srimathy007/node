const route = require("express").Router();
const model = require("../orm/model")



route.get("/authors", function (request, response) {
    model.author.findAll(
        { include: [model.book] }
    ).then(function (data) {
        response.render("author", { authors: data })
    }).catch(function (err) {
        console.log(err)
        response.json([]);
    })
})



route.post("/authors", function (request, response) {
    var author = {
        author_id: request.body.author_id,
        name: request.body.name,
        country: request.body.country
    }
    console.log(author);
    model.author.create(author, { include: [model.book] }).then(
        () => response.send("successfully uploaded")
    ).catch(
        () => response.sendStatus(500)
    );
})

route.get("/books", function (request, response) {
    model.book.findAll(
        { include: [model.author] }
    ).then(function (data) {
        response.render("book", { books: data })
    }).catch(function (err) {
        console.log(err)
        response.json([]);
    })
})



route.post("/books", function (request, response) {
    var book = {
        book_id: request.body.book_id,
        name: request.body.name,
        category: request.body.category,
        price: request.body.price
    }
    console.log(book);
    model.book.create(book, { include: [model.author] }).then(
        () => response.send("successfully uploaded")
    ).catch(
        function (err) {
            console.log(err);
            return response.sendStatus(500);
        }
    );
})


module.exports = route
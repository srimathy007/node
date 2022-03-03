const connection=require("./dbconfig")

operations ={
    insert: function(book_id,name,category,price,callback){
        connection.query("insert into people values(?,?,?)",
        [book_id,name,category,price],
        callback)
         },

     getPeople: function(callback){
       connection.query("select * from book",callback)
     },

     getPerson: function(book_id,callback){
       connection.query("select * from book where book_id=?",[book_id],callback)
     }
   }

module.exports = operations;
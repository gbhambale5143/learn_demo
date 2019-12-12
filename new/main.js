var express = require("express");
var app = express();
//var bodyparser = require("body-parser");
var connection = require("./connection");
var mysql = require("mysql");


app.get("/", function(req,res){
res.sendFile(__dirname+"/homepage.html");
});

app.get("/login", function(req,res){
    res.sendFile(__dirname+"/login.html");
    });



    app.get("/verify", function(req,res){

        uid = req.query.uid;
        pwd = req.query.pwd; 
        var x = connection.con;
        sql= "insert into info values('"+uid+"','"+pwd+"')";
        
        x.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
        }else{
            res.sendFile(__dirname+"/successful.html");
        }
        

    })
        
        
});
app.listen("8787");

console.log("express started");

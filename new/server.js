var http = require("http");
var url= require("url");
var fs = require("fs");
var connect = require("./connection");

http.createServer(function(req,res){
    //res.write("<h1>baby i like you!!</h1>");

    q=url.parse(req.url,true);
    path=q.pathname;

    if(path=="/"){
                fs.readFile("./index.html",function(err,data)
            {
                if(err){
                    res.write("No means No");
                }
                else{
                    res.write(data);
                }
            })
    }
    if(path=="/login.html"){
        fs.readFile("./login.html",function(err,data)
    {
        if(err){
            res.write("No means No");
        }
        else{
            res.write(data);
            
        }
    })
}
if(path=="/verify"){
    fdata = q.query;
    uid = fdata.uid;
    pwd = fdata.pwd;
    var con = connect.con;
    var sql = "insert into info values('"+uid+"','"+pwd+"')";
    con.query(sql,function(err,result){
        console.log(err);
    })
        res.write("UID :" + uid +"\n");
        res.write("PWD :" + pwd +"\n");
        res.end();
}


}).listen(8081);
console.log("server is on fire");

 
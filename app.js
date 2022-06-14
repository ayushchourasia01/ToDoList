const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ['Number 1','Number 2','Number 3']
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){
    var today = new Date();
    var day = today.toLocaleDateString("en-US",options);

    res.render("index", {Today: day , NewItems: items});
})

app.post("/",function(req,res){
    var item = req.body.ItemName;
    items.push(item);

    res.redirect("/");
})

app.listen(3000,function(){
    console.log("server started at 3000");
});
var express=require("express");
var app=express();

app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("tanks.ejs");
});



app.listen(process.env.PORT,process.env.IP,function(){
	console.log("server has started");
}) 

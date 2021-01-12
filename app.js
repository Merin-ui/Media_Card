const express= require('express')
const app=express()
const nunjucks = require('nunjucks')
var njIncludeData = require('nunjucks-includeData');

var path = require('path');
var nunjucksEnv = nunjucks.configure('views',{
	autoescape:true,
	express:app	
});

njIncludeData.install(nunjucksEnv); 

app.use(function(req,res){
	console.log("This is a "+ req.method + " to "+ req.url)
	res.render(path.join(__dirname,'views','/home.html'))
});
	
app.listen(1200);

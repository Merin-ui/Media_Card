const express= require('express')
const app=express()
const nunjucks = require('nunjucks')
var njIncludeData = require('nunjucks-includeData');

var path = require('path');
var nunjucksEnv = nunjucks.configure('html',{
	autoescape:true,
	express:app	
});

njIncludeData.install(nunjucksEnv); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(function(req,res){
	console.log("This is a "+ req.method + " to "+ req.url)
	res.render(path.join(__dirname,'html','/home.html'))
});
	
app.listen(3000,function(){console.log("Rendered the page populated using Nunjucks")});

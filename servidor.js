var express =require("express");
var nunjucks =require("nunjucks");
var modelos=require("./modelos/principal.js");

console.log("PRUEBA:"+modelos.PRUEBA);


var app=express();
nunjucks.configure(__dirname+"/vistas",{
	express:app
});



app.listen(8084);
app.get("/articulo",function(req,res){
	//res.send("Hola!");
	modelos.Articulo.find(1).success(function(articulo){
		//console.log("se encontro articulo:"+articulo.titulo);
		res.render("articulo.html",{
			articuloPrincipal:articulo
		});		
	});	
});

app.get("/blog",function(req,res){
	//res.send("Hola!");
	res.render("blog.html");
	
});

app.get("/usuario",function(req,res){
	//res.send("Hola!");
	res.render("usuario.html");
	
});


app.get("/informe",function(req,res){
	res.send("Informes aqui!");
	
});


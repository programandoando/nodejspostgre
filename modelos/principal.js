var Sequelize=require("sequelize");

var sequelize=new Sequelize("NOMBRE_BASE","USUARIO","PASSWORD",{
	dialect:"sqlite",
	storage:__dirname+"/database.db",
	define:{
		timestamps:false,
		freezeTableName:true
	}
});

sequelize.authenticate().success(function(){
	console.log("base lista");
	
});

module.exports.PRUEBA="hola";

var Articulo=sequelize.define("Articulo",{	
	id:{
		primaryKey:true,
		type:Sequelize.INTEGER
	},
	titulo:Sequelize.TEXT,
	contenido:Sequelize.TEXT	
},{
	tableName:"articulos"
});

module.exports.Articulo=Articulo;



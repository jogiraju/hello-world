var mysql=require('mysql');

var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'kohaworld',
	database:'demo'
});

module.exports=connection;
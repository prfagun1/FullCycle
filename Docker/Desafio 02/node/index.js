const express = require('express')

const app = express()
const port = 3000
const host = '0.0.0.0';

const config ={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const titulo = "<h1>Full Cycle Rocks!</h1>";
var dadosBanco = "";

const sqlTabela = 'CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))'
connection.query(sqlTabela)

const sql = `insert into people(name) values('Pablo')`
connection.query(sql)

connection.query("SELECT name FROM people", function (err, result, fields) {
    if (err) throw err;

    result.forEach(function (result) {  
        console.log(result.name); 
        dadosBanco += result.name + '<br>'
    })  
});



connection.end




app.get('/', (req,res) => {
    res.send(titulo + dadosBanco)
})

app.listen(port, host, ()=>{
    console.log('Rodando na porta 1' + port + ' no host ' + host)
})
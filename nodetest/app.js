var path=require('path')
var express=require('express')
var app=express()
app.use(express.static("./public"))
app.use('/lib',express.static(path.join(__dirname,'node_modules')))

var mysql=require("mysql")
var db=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"123456",
    "port":3306,
    "database":"dbtsy"
})
db.connect()

app.get('/a',function(req,res){
    res.end('aaaaaaaaaaaa')
})
app.post('/b',function(req,res){
    db.query("select * from goods",function(err,result){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        if(err)
            throw err
        res.end(JSON.stringify(result))
    })
})
app.listen(9999)
console.log('运行中....')


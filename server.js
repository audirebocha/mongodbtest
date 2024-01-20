import bodyParser from 'body-parser'
import express from 'express'
import db_connect from './Db_con.js'
import API  from  './API/api.js'


const app=express()
//Database connection establishment
db_connect()
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


//API
app.use('/api',API)

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.post('/handshake',(req,res)=>{
    console.log(req.params,req.body)
    res.send(req.params,req.body)
})
app.listen(5000,()=>{console.log('Server has started on port 5000')})
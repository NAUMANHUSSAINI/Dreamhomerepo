const express = require('express')
const app = express()

//for resolving cors error --> for backend 
const cors = require('cors');


require('dotenv').config({path:'./.env'})
const connect = require('./db')
const port = process.env.PORT ;
const UserRoutes = require('./routes/userRoutes.js')
connect()
app.use(express.json())
// Enable CORS for all routes
app.use(cors());

app.use('/api',UserRoutes)
app.listen(5000,()=>{
    console.log(`server running ${port}`)
})
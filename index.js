const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routes/server')
const auth = require('./routes/auth')
const app = express()
app.use(cors())
dotenv.config({path:'./config.env'})
const port=process.env.PORT
const db=process.env.DATABASE

mongoose.connect(db,()=>{
    app.listen(port,()=>{
        console.log(`server stared ${port}`);
    })
})
// require('./db/conn')
app.use(express.json())
app.use('/',router)
app.use('/login',auth) 



const mongoose = require('mongoose')


const userdata=  new mongoose.Schema({
    name:{
        type:String,
        required:[true,'plz enter your name']
    },
    email:{
        type:String,
        unique:[true,'plz enter your email']
    },
    password:{
        type:String,
        required:[true,'plz enter your password']

    },
    cpassword:{
        type:String,
        required:[true,'plz confirm password']

    }
})




module.exports = mongoose.model('userdata',userdata)
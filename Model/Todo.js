const mongoose = require('mongoose')

const todo =  new mongoose.Schema({
  name:{
      type:String
  },
  descr:{
      type:String
  },
  userid:{
      type:String
  }  
})



module.exports=mongoose.model("todo",todo)
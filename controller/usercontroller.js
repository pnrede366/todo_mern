const express = require('express')
const userdata = require('../Model/userschema')
const bcrypt = require('bcrypt');
const todo = require('../Model/Todo');
const jwt = require('jsonwebtoken')

exports.createdata= async (req,res)=>{
    // console.log(req.body.password);
    // console.log(req.body.cpassword);
    if (req.body.password==req.body.cpassword) {
        req.body.password=await bcrypt.hash(req.body.password,10);
        req.body.cpassword=await bcrypt.hash(req.body.cpassword,10);
        const data = await userdata.create(req.body)
        res.status(200).json({
            message:'data added successfully',
            data:data
        })
    
        
    }
    

}


exports.getdata= async (req,res)=>{

    const data = await userdata.find()
// console.log(data);
    // const username=data.name
    // const userpassword=data.password
  
    res.status(200).json({
        message:'get data successfully',
        data:data
    })

}

exports.setTodo=async (req,res)=>{
    const token = req.headers.authorization;
        const match = await jwt.verify(token,'hello');
        console.log(token+"token");
        console.log(match+"match") 
        req.body.userid=match.id;

        const data = await todo.create(req.body)
        res.status(200).json({
            message:"todo added successfully",
            data:data
        })

}



exports.getTodo=async (req,res)=>{
    const token = req.headers.authorization;
        const match = await jwt.verify(token,'hello');
        // console.log(match.id);
        const data = await todo.find({userid:match.id})
            res.status(200).json({
                message:"todo get",
                data:data 
            })

                console.log(data+"ok");
}


exports.updateTodo=async (req,res)=>{
   
        // console.log(match.id);
        console.log(req.params.id);
        const data = await todo.findByIdAndUpdate({_id:req.params.id},req.body)
            res.status(200).json({
                message:"todo update",
                data:data 
            })

                console.log(data+"ok");
}

exports.deleteTodo= async (req,res)=>{
    console.log(req.params.id);
    const data = await todo.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({
        message:"todo deleted",
        // data:data 
    })
}

exports.getMyTodo = async (req,res) =>{
    const data = await todo.find()
    res.status(200).json({
        message:"get todo",
        data:data 
    })

}
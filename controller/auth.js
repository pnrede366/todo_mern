const express = require('express')
const userdata = require('../Model/userschema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.getmydata= async (req,res)=>{
    const {email,password}=req.body;
    const data = await userdata.findOne({email})
console.log(data);

if (data) {
    const check = await bcrypt.compare(password,data.password)  
    console.log(check);
    if (check) {

        // const token = await data.generateAuthToken()
        const token = await jwt.sign({id:data._id},'hello');
            res.status(200).json({
                success:true,
                token:token,
                message:
                "log in successfull"
            })
    }
    else{
        res.status(200).json(
            {
                success:false,
                message:"passsword not match"
            }
        )
        }
        
    }
    else{
            res.status(200).json({
                success:false,

                message:"no user found"
            })       
        }
}
const { response } = require('express');

const User = require('../models/user_model');

exports.addUser = async (req,res,next)=>{
    try{
        const name=req.body.name;
        const contact=req.body.contact;
        const email=req.body.email;
        const data = await User.create({name:name,contact:contact,email:email});
        res.status(201).json({newUserDetail:data})
    }catch(err){
        console.log("some error occured");
        res.status(500).json({
            error:err 
        })
    }; 
}

exports.getUser=(req,res,next)=>{
    User.findAll()
    .then((response)=>{
        console.log("findall");
        console.log(response);
        res.status(202).json(response);
    })
    .catch((err)=>{
        console.log("not_findall");
        console.log(err);
    })
}

exports.deleteUser=async(req,res,next)=>{
    try{
     if(req.params.id=='undefined')
        {
        console.log("Id is missing")
        return res.status(400).json({err:'Id is missing in Url'});
        }
    const userId = req.params.id;
    await User.destroy({where:{id:userId}})
    res.status(208).json({deletedUser:userId})  
    }
    catch(err){
     console.log(err);
     res.Status(501).json(err);
    }
    
}
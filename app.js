const express = require('express');
const app= express();
const userModel=require('./usermodel');
app.get('/',(req,res)=>{
    res.send("hey");
})
app.get('/create',async(req,res)=>{
    let createduser= await userModel.create({
        name:"swati",
        email:"swastika@gmail.com",
        username:"swastika"
    })
    res.send(createduser);
})

app.get('/update',async(req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({username:"swastika"},{name:"swastika pradhan"},{new:true})
    res.send(updateduser);

})
app.get('/read',async(req,res)=>{
    let users=await userModel.find();
    res.send(users);
})
app.listen(3000);
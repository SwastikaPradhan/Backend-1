# Backend-1
How to create with express js and node js

**Run in Terminal**

**Step - 1**

npm init -y
npm i express
npm i mongoose

**Step-2**

Create app.js file 
Then create usermodel.js

**Step-3**

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


**Step - 4**

const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String

})

module.exports=mongoose.model("user",userSchema);


const express =require("express")
const mongoose =require("mongoose")
const app=express()

mongoose.connect("mongodb+srv://azimkhan:azimkhan@cluster0.dk8fy6p.mongodb.net/tailor").then(()=>{
    console.log("database connected")
    app.listen("4000",()=>{
        console.log("server start")
    })
})
const userSchema=new mongoose.Schema({
    name:{
        type:"string",
    },
    email:{
        type:"string"
    },
    password:{
        type:"string"
    },
    active:"boolean"
})
const price=mongoose.model("User",userSchema)

app.get("/",async(req,res)=>{
    const alldata=await price.find({})
    return res.json({
        data:alldata,
        success:true
    })
})



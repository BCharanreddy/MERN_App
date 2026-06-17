const User=require("../models/User");
const bcrypt=require('bcryptjs');

// app.post("/api/login",async (req,res)=>{
    const login=async (req,res)=>{
    
    try{
        const {email,password} =req.body;
        const user=await User.findOne({email:email});
        console.log(email,password);
        if(!user){
            return res.status(400).json({
                message:"Failed"
            });
        }
        const hashedPassword=user.password;
        bcrypt.compare(password,hashedPassword,(err,isMatch)=>{
            if(err){
                return res.status(404).json({
                    message:"Failed"
                });
            }
            if(isMatch){
                return res.status(201).json({
                    message:"success",
                    name:user.fullname
                });
            }
            else{
                return res.status(200).json({
                    message:"Failed"
                });
            }
        });
    }catch(error){
        console.log("Error: ",error.message);
        res.status(500).json({
            message:"Failed"
        });
    }
};

module.exports={login};
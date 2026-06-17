const bcrypt=require('bcryptjs');
const User=require("../models/User");

// app.post("/api/register",async (req,res)=>{
const register=async (req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const existingUser=await User.findOne({email:email});

        if(existingUser){
            return res.status(400).json({
                message:"Email already Registered"
            });
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser =new User({
            fullname:fullname,
            email:email,
            password:hashedPassword
        });
        await newUser.save();
        res.status(201).json({
            message:"Registration Successful"
        });
    }
    catch(error){
        console.log("Error: ",error.message);
        res.status(500).json({
            message:"Registration Failed..!",
            error:error.message
        });
    }
};

module.exports={register};
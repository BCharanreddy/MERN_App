const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const bcrypt=require('bcryptjs');

require("dotenv").config();

const User=require('./models/User');

const app=express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB cloud connected successful")
})
.catch((error)=>{
    console.log("MongoDB connection Failed! ",error)
});

app.get("/",(req,res)=>{
    res.send("Backend Running Successful")
});

const routes=require('./router/authRoute');

app.use('/api',routes);

// app.post("/api/register",async (req,res)=>{
//     try{
//         const {fullname,email,password} = req.body;
//         const existingUser=await User.findOne({email:email});

//         if(existingUser){
//             return res.status(400).json({
//                 message:"Email already Registered"
//             });
//         }

//         const hashedPassword=await bcrypt.hash(password,10);
//         const newUser =new User({
//             fullname:fullname,
//             email:email,
//             password:hashedPassword
//         });
//         await newUser.save();
//         res.status(201).json({
//             message:"Registration Successful"
//         });
//     }
//     catch(error){
//         res.status(500).json({
//             message:"Registration Failed..!",
//             error:error.message
//         });
//     }
// });

// app.post("/api/login",async (req,res)=>{
    
//     try{
//         const {email,password} =req.body;
//         const user=await User.findOne({email:email});
//         console.log(email,password);
//         if(!user){
//             return res.status(400).json({
//                 message:"Failed"
//             });
//         }
//         const hashedPassword=user.password;
//         bcrypt.compare(password,hashedPassword,(err,isMatch)=>{
//             if(err){
//                 return res.status(404).json({
//                     message:"Failed"
//                 });
//             }
//             if(isMatch){
//                 return res.status(201).json({
//                     message:"success",
//                     name:user.fullname
//                 });
//             }
//             else{
//                 return res.status(200).json({
//                     message:"Failed"
//                 });
//             }
//         });
//     }catch(error){
//         res.status(500).json({
//             message:"Failed"
//         });
//     }
// });
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
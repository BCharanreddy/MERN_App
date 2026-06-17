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


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})

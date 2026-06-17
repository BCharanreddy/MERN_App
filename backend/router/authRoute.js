const express=require('express');
const router=express.Router();
const {login} =require('../controller/login');
const {register} =require('../controller/register');

router.post("/login",login);
router.post("/register",register);

module.exports=router;

const express=require('express')
const { UserModel } = require('../Models/authModel');

const userRouter=express.Router()


userRouter.post('/user',async(req,res)=>{
    const {name,email}=req.body
    try {
        const UserExists= await UserModel.findOne({email}) 
        if(!UserExists){
            const user= new UserModel(req.body)
            await user.save()
            res.send(user)
        }
        else{
            res.send(UserExists)
        }
        
    } catch (error) {
        res.send(error)
    }
})


module.exports={
    userRouter
}
const express=require('express')
const { FavModel } = require('../Models/favModel');

const FavRouter=express.Router()


FavRouter.get('/',async(req,res)=>{
    const {email}=req.body
    try {
        const Fav_items= await FavModel.findOne({email}) 
        if(!Fav_items){
            res.status(401).send({"err":"Item not found"})
        }
        else{
            res.send(Fav_items)
        }
        
    } catch (error) {
        res.status(400).send({"err":error.message})
    }
})

FavRouter.post('/add',async(req,res)=>{
    const {user_email,
        recipe_name,
        recipe_id,
        recipe_image}=req.body
    try {
        const UserExists= await FavModel.findOne({user_email}) 
        if(!UserExists){
            const user= new FavModel(req.body)
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
    FavRouter
}
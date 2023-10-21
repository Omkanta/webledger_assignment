const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{type:String},
    name:{type:String},
})

const UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}
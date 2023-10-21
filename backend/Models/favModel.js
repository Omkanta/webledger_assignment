const mongoose=require("mongoose")

const favSchema=mongoose.Schema({
    user_email:{type:String},
    recipe_name:{type:String},
    recipe_id:{type:Number},
    recipe_image:{type:String}
})

const FavModel=mongoose.model("fav",favSchema)
module.exports={
    FavModel
}
const express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/userRoute")
const cors=require("cors");
const { FavRouter } = require("./Routes/FavRoute");

const app=express();
app.use(express.json());

app.use(cors())

app.use('/',userRouter)
app.use('/fav',FavRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log("Server running at 8080")

})
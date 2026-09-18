import express from "express"
import cors from "cors"
import config from "./config/config.js"
const app=express()
const corsOrgin={
    origin:config.FROENTEND_URL,
    creadentials:true
}

//Middleware
app.use(express.json())
app.use(cors(corsOrgin))

app.get("/health",(req,res)=>{
    res.status(200).json({message:"ok"})
})

export default app


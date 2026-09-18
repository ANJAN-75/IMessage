import express from "express"
import cors from "cors"
import config from "./config/config.js"
import { clerkMiddleware } from '@clerk/express'
import path from "path"
import fs from "fs"

const app=express()
const corsOrgin={
    origin:config.FROENTEND_URL,
    creadentials:true
}

const publicDir=path.join(process.cwd(),"public")

//Middleware
app.use(express.json())
app.use(cors(corsOrgin))
app.use(clerkMiddleware())
app.get("/health",(req,res)=>{
    res.status(200).json({message:"ok"})
})

//if public directory exist serve the static file 
//this is for the production build
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"),
     (err) => next(err));
  });
}


export default app


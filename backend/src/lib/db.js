import mongoose from "mongoose"
import config from "../config/config.js"
export default async function connectDb (){
    try{
        let con =await mongoose.connect(config.MONGO_URI)
        console.log("mongoDb connect sucess fully",con.connection.host)
    }catch(error){
        console.log("Error Message",error.message)
        process.exit(1)
    }
}
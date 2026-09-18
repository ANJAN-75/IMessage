import dotenv from "dotenv" 
dotenv.config()

let MONGO_URI=process.env.MONGO_URI
let FROENTEND_URL=process.env.FROENTEND_URL

if(!MONGO_URI){
    throw new Error("no MONGO_URI exist in env")
}
if(!FROENTEND_URL){
    throw new Error("no FROENTEND_URL exist in env")
}

const config={
    MONGO_URI,
    FROENTEND_URL
}


export default config

import app from "./src/index.js"
import connectDb from "./src/lib/db.js"


connectDb()
app.listen(3000,()=>{console.log("app is up and listning on port 3000")})
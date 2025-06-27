import { config } from "dotenv";
import app from "./app.js";
import { connectToMongoDB } from "./utils/connectDb.js";


config();

const PORT = process.env.PORT

async function startServer() {


    await connectToMongoDB();

    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT} ${new Date()}`);
        
    })

    
}

startServer()
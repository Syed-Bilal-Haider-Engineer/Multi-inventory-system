import mongoose from "mongoose"
import { config } from 'dotenv';
const connectDatabase = async()=>{
    if (process.env.NODE_ENV !== 'prod') {
        config({
            path: '.env'
        })
    }
   await mongoose.connect(process.env.MONGODB_URI).then((data)=>{{
        console.log(`mongo connected with server  & ${process.env.MONGODB_URI}`)
    }})
}

export default connectDatabase;
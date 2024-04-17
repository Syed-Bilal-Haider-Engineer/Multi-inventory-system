import mongoose from "mongoose"

const connectDatabase = async()=>{
   await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology:true,
    }).then((data)=>{{
        console.log(`mongo connected with server ${data.connection.host} & ${process.env.MONGODB_URI}`)
    }})
}

export default connectDatabase;
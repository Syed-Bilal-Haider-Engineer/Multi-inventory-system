import mongoose from "mongoose"

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology:true,
    }).then((data)=>{{
        console.log(`mongo connected with server ${data.connection.host}`)
    }})
}

export default connectDatabase;
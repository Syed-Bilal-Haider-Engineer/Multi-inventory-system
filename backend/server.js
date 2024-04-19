import app from './app.js'
import { config } from 'dotenv';
process.on("uncaughtException",(err)=>{
 console.log(`Error: ${err.message}`);
 console.log(`shutting down the server for handling uncaughtException`);
})

if (process.env.NODE_ENV !== 'prod') {
    config({
        path: '.env'
    })
}
console.log(process.env.PORT,"process.env.PORT");
const server = app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on https://localhost:${process.env.PORT}`);
})

process.on("unHandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling promise rejction`);

    server.close(()=>{
        process.exit(1)
    })
})


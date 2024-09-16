const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log(process.env.DB_URL,"process.env.DB_UR", process.env.NODE_ENV)
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    }).catch((error)=>{
      console.log('Database error',error.message)
    })
};

module.exports = connectDatabase;

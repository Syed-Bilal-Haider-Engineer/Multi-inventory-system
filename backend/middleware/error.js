import ErrorHandler from "../utils/ErrorHandler.js";

const error = (err,req,res,next)=> {

err.status = err.status || 500;
err.message = err.message || "interval server error";
//wrong mongoDB id
 if(err.name === 'CastError'){
   const message = `Resources not found with this id. Invalid ${err.path}`;
   err = new ErrorHandler(message,400)
 }

//duplicate key error
if(err.code === 11000){
    const message = `Duplicate key ${Object.keys(err,keyValues)}`;
    err = new ErrorHandler(message,400)
  }

  //wrong jwt error
if(err.name === 'JsonWebTokenError'){
    const message = `Your Url is invalid please try again!`;
    err = new ErrorHandler(message,400)
  }

 // Token expire error
if(err.name === 'TokenExpiredError'){
    const message = `Your Url is expired please try again!`;
    err = new ErrorHandler(message,400)
  }

res.status(err.statusCode).json({
    success:false,
    message:err.message
})
}

export default error;
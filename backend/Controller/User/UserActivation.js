import User from "../../Model/user";
import jwt from 'jsonwebtoken';
const userActivation= async(req,res,next)=>{
    try {
        const { activation_token } = req.body;
  
        const newUser = jwt.verify(
          activation_token,
          process.env.ACTIVATION_SECRET
        );
  
        if (!newUser) {
          return next(new ErrorHandler("Invalid token", 400));
        }
        const { name, email, password, avatar } = newUser;
  
        let user = await User.findOne({ email });
  
        if (user) {
          return next(new ErrorHandler("User already exists", 400));
        }
         user = await User.create({ name, email, avatar, password });
        sendToken(user, 201, res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
}

export default userActivation;
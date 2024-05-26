import User from "../../Model/user.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

// load user
  const getUser = async(req, res, next) =>{
        try {
          const user = await User.findById(req.user.id);
    
          if (!user) {
            return next(new ErrorHandler("User doesn't exists", 400));
          }
    
          res.status(200).json({
            success: true,
            user,
          });
        } catch (error) {
          return next(new ErrorHandler(error.message, 500));
        }
  }
export default getUser;
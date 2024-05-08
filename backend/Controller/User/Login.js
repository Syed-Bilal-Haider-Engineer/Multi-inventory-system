import User from "../../Model/user";
import { ErrorHandler } from '../utils/errorHandler'; // Import ErrorHandler if not already imported
import sendToken from './sendToken'; // Import sendToken if not already imported

const login = async (req, res, next) => { // async keyword should be before (req, res, next)
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide all fields!", 400)); // Corrected error message
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("User doesn't exist!", 400)); // Corrected error message
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return next(new ErrorHandler("Please provide the correct information", 400));
    }

    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export default login;

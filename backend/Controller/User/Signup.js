import ErrorHandler from '../../utils/ErrorHandler.js'
import User from '../../Model/user.js';
import path from 'path';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import sendMail from '../../utils/sendMail.js';

if (process.env.NODE_ENV !== 'prod') {
   config({
       path: '.env'
   })
}

const addUserAccount = async (req, res, next) => {
   const { name, email, password } = req.body;
   const filename = req.file.filename;
  const isEmail = await User.findOne({ email })
   if (isEmail) {
      const filepath = `./uploads/${req.file.filename}`
      if (fs.existsSync(filepath)) {
         fs.unlinkSync(filepath);
      }
      throw new ErrorHandler('User already exists', 400);
   }
  
   const fileURL = path.join(filename);
   const user = { name, email, password, avatar: fileURL }
   const activationToken = createActivationToken(user);
   const activationURL = `http://localhost:8000/activation/${activationToken}`;
 
   try {
   const newUser = await User.create(user);
   await sendMail({
      email: user.email,
      subject: "Activate your account",
      message: `Hello ${user.name}, please click on the link to activate your account: ${activationURL}`,
    });
    res.status(201).json({
      success: true,
      message: `please check your email:- ${user.email} to activate your account!`,
      newUser,
   })
   } catch (error) {
      res.status(400).json({
         success: fasle,
         message: error.message
      })
   }
}
const createActivationToken = (user) => {
   return jwt.sign({ id: user._id }, process.env.ACTIVATION_SECRET, {
      expiresIn: '5m'
   });
};
export default addUserAccount;
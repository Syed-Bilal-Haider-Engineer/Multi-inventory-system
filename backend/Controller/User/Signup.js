import ErrorHandler from '../../utils/ErrorHandler.js'
import User from '../../Model/user.js';
const addUserAccount = async(req,res,next) => {
 const { name, email,password } = req.body;
 console.log(email,"email==>");
 const isEmail = await User.find({email});
 if(isEmail){
    return next(new ErrorHandler('User already exist',400));
 }
 console.log(isEmail,"isEmail");
 const filename = req.file.filename;
 const fileURL = path.join(filename);
 const user = { name, email, password, avatar:fileURL}
 console.log(user,"user");
 const newUser = await User.create(user);
 res.status(201).json({
    success:true,
    newUser
 })
}
export default addUserAccount;
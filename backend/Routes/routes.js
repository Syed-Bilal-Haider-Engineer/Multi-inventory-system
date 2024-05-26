import express from 'express';
import addUserAccount from '../Controller/User/Signup.js';
import upload from '../Multer.js'
import userActivation from '../Controller/User/UserActivation.js';
import getUser from '../Controller/User/getUser.js';
import login from '../Controller/User/Login.js';
import isAuthenticated from '../middleware/auth.js'

const route = express.Router();
route.post("/adduserAccount",upload.single('file'), addUserAccount)
route.post("/user/activation",userActivation)
route.post('/user/login-user',login);
route.get('/getUser',isAuthenticated,getUser)
export default route;
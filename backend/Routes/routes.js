import express from 'express';
import addUserAccount from '../Controller/User/Signup.js';
import upload from '../Multer.js'
const route = express.Router();
route.post("/adduserAccount",upload.single('file'), addUserAccount)

export default route;
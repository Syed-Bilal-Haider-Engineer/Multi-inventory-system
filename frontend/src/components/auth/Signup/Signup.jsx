import React, { useState } from 'react'
import { BsEyeSlashFill } from "react-icons/bs";
import { CgEye } from "react-icons/cg";
import styles from '../../../styles/styles.js';
import { Link } from 'react-router-dom';
import Input, { renderLabel } from '../../../CustomComponents/Input.jsx';
const Signup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [form, setForm] = useState({
    fullName:'',
    email:'',
    password:'',
    rememberMe : true
  })
 const [file,setFile] = useState()
 const [preview,setImagePreview] = useState()
 const onChange = (e) => {
    console.log(e.target.value,"e.target.value",e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fileChange = (e) =>{
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setImagePreview(imageUrl);
      }
  }
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-7 sm:px-6 lg:px-8'>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className='mt-5 text-center font-extrabold text-gray-900'>
          Register as a new user
        </h2>
      </div>
      <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form action="" className="space-y-6">
            <Input htmlFor="fullName" label="Full name" type="text"  autoComplete="fullName" required={true} value={form.fullName} name="fullName" onChange = {onChange} />
            <Input htmlFor="email" label="Email address" type="email"  autoComplete="email" required={true} value={form.email} name="email" onChange = {onChange} />
              <div className='mt-1 relative'>
              <Input htmlFor="password" label="Password" type="password" visible autoComplete="password" required={true} value={form.password} name="password" onChange = {onChange}/>
                { isVisible ? <CgEye
                  className='absolute right-2 top-8 cursor-pointer text-black'
                  size={20} 
                  onClick={() => setIsVisible(!isVisible) }
                  />
                 :<BsEyeSlashFill
                  className='absolute right-2 top-8 cursor-pointer text-black'
                  size={20} 
                  onClick={() => setIsVisible(!isVisible) }
                  />
                }
                 </div>
            <div>
            <Input htmlFor="file" label="Upload image" type="file"  autoComplete="file" required={true}  name="file" onChange = {fileChange} />
            {preview && (
                <img src={preview} alt="Preview" className="mt-2 w-[30px] h-[30px]" />
              )}
            <button type="submit" className='group relative w-full h-[40px] flex justify-center py-2 px-4 mt-3 border border-transparant text-sm font-medium bg-blue-600 hover:bg-blue-400'>Submit</button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h2 className='text-black'>Already have account?</h2>
              <Link to="/login" className='text-blue-600 pl-2'>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup

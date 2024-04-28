import React, { useState } from 'react'
import { BsEyeSlashFill } from "react-icons/bs";
import { CgEye } from "react-icons/cg";
import styles from '../../../styles/styles.js';
import { Link } from 'react-router-dom';
import Input, { renderLabel } from '../../../common/Input.jsx';
import useFormHook from '../../../customHook/postHook.jsx';

const initialValue = {
  email:'',
  password:'',
  rememberMe : true
}
const Login = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { handleSubmit } = useFormHook();
  const [form, setForm] = useState(initialValue)

  const onChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(initialValue)
  }

  const login = ()=>{
    e.preventDefault();
    handleSubmit(form, resetForm,'json',`${server}/user/login-user`);
  }
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-8 sm:px-6 lg:px-8'>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className='mt-5 text-center font-extrabold text-gray-900'>
          Login to your account
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form action="" className="space-y-6">
            <Input htmlFor="email" label="Email address" type="email"  autoComplete="email" required={true} value={form.email} name="email" onChange = {onChange} />
            <div>
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
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
               <div className={`${styles.noramlFlex} `}>
                 <Input type="checkbox"  name="remember-id" label="Remember me" value ={form.rememberMe} onChange = {onChange}  />
                   {renderLabel(" Remember me ","remember-id")}
               </div>
               <div className='text-sm'>
                     <a href=".forget-password" className='font-medium text-blue-600 hover:text-blue-300'>Forget password</a>
               </div>
               
            </div>
            <div>
            <button type="submit" className='group relative w-full 
            h-[40px] flex justify-center py-2 px-4 border border-transparant text-sm
             font-medium bg-blue-600 hover:bg-blue-400' onClick={login}>Submit</button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h2 className='text-black'>Not have account?</h2>
              <Link to="/signup" className='text-blue-600 pl-2'>
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

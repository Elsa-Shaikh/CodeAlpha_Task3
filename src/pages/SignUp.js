import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {user, signUp} = UserAuth();
    const navigate = useNavigate();
    console.log(user);
    const handleSubmit = async(e)=>{
          e.preventDefault();
          try {
             await signUp(email,password);
             navigate('/')
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <>
    <div className='w-full h-screen'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/bf6f5dab-8a85-48af-be22-de3a0cfd4ea7/PK-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
       alt=""
       className='hidden sm:block absolute w-full h-full object-cover'
       />
       <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
       <div className='fixed w-full px-4 py-20 z-50'>
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' autoComplete='email'
                    className='p-3 my-2 bg-gray-700 rounded' onChange={(e)=>{ setEmail(e.target.value)}}/>
                    <input type="password" placeholder='Password' autoComplete='current-password'
                    className='p-3 my-2 bg-gray-700 rounded' onChange={(e)=>{ setPassword(e.target.value)}}/>

                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                    <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input type="checkbox" className='mr-2' /> Remember me</p>
                        <p>Need Help?</p>
                    </div>
                    <p className='py-8'>
                        <span className='text-gray-600'>Already subscribed to Netflix? </span>
                        <Link to='/login'>Sign In</Link>
                         </p>
                </form>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default SignUp
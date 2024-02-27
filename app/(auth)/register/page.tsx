"use client"

import { useState } from "react";
//import { toast } from 'react-hot-toast'
import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/lion7.png';
//import Loader from "../components/Loader"

const Register = () => {
  

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };


  /* const registerMutation = useMutation({
    mutationFn:() => registerReq(values.username, values.email, values.password, values.confirm_password),
    onSuccess:(res) => {
      setToken(res.access, res.refresh);
      toast.success(res.message);
      navigate("/")
    },
    onError: (error) => {
      if (typeof error === 'string') {
        toast.error(error);
      } else {
        toast.error('An error occurred');
      }
    }
  }) */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* if (values.password !== values.confirm_password) {
      return toast.error('Passwords does not match')
    } else {
      registerMutation.mutate()
    } */
  }

  //if (registerMutation.isLoading) return <Loader />

  return (
<div className="flex min-h-full items-center justify-center py-2 px-3 sm:px-6 lg:px-8 text-white">
  <div className='p-2'>
    <div className="w-[300px] max-w-md space-y-2 md:w-[400px] lg:w-[400px]">
        <Image
            src={Logo}
            className="mx-auto text-sky-600 h-20 w-20 rounded-full"
            alt="Logo de página"
        />
        <h2 className="text-center text-3xl lg:text-4xl font-bold"> Register </h2>
      {/*registerMutation.error && <div> <p className="font-bold text-red-700 p-2" > {registerMutation.error.response.data.message} </p> </div> */}
      <form className="p-3 space-y-2 md:space-y-4" onSubmit={handleSubmit}>

          <label htmlFor="username" className="block text-sm lg:text-base font-medium">UserName</label>
          <input type="text" name="username" id="username" 
            value={values.username}
            onChange={handleChange}
            required
            className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="your username"/>
          {/*registerMutation.error && <div> <p className="font-bold text-red-700" > {registerMutation.error.response.data.error?.username} </p> </div> */}

          <label htmlFor="email" className="block text-sm lg:text-base font-medium">Email</label>
          <input type="email" name="email" id="email" 
            value={values.email}
            onChange={handleChange}
            required
            className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-50" placeholder="your email"/>
          {/*registerMutation.error && <div><p className="font-bold text-red-700" >{registerMutation.error.response.data.error?.email}</p></div>*/}

          <label htmlFor="password" className="block text-sm lg:text-base font-medium">Password</label>
          <input type="password" name="password" id="password" 
            value={values.password}
            onChange={handleChange}
            required
            placeholder="••••••••••" className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"/>
          {/*registerMutation.error && <div> <p className="font-bold text-red-700" > {registerMutation.error.response.data.error?.password} </p> </div> */}

          <label htmlFor="confirm_password" className="block text-sm lg:text-base font-medium">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password" 
            value={values.confirm_password}
            onChange={handleChange}
            required
            className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••••"/>
            {/*registerMutation.error && <div> <p className="font-bold text-red-700" > {registerMutation.error.response.data.error?.confirm_password} </p> </div> */}

        <button type='submit' className="bg-sky-400 my-2 w-full hover:bg-sky-500 p-2 px-5 rounded-full text-white font-bold">
          Register
        </button>
      </form>

      <div className="flex items-center justify-between text-sm lg:ml-5">
          <Link href={'/login'}>
            Have an account?
            <span className='hover:text-sky-500 ml-2 transition-colors'>
              Sign in here!
            </span>
          </Link>
      </div>

    </div>
  </div>
</div>
)}

export default Register
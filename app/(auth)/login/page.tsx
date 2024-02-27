"use client"

import { useState } from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { redirect } from "next/navigation"
import Link from "next/link";
import Image from "next/image";
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
  } from '@heroicons/react/24/outline';
//import { toast } from 'react-hot-toast'
import Logo from '@/public/lion7.png';



const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);



  /* const loginMutation = useMutation({
    mutationFn:() => loginReq(username, password),
    onSuccess:(res) => {
      setToken(res.access, res.refresh);
      toast.success("Login successfully");
      navigate("/")
    },
    onError: (error) => {
      toast.error("There was an error, please try to login again")
      console.log(error);
    }
  }) */

  //if (loginMutation.isLoading) return <Loader />
  //if (isAuth) return (<Navigate to="/" />)

  return (
    <div className="flex min-h-full items-center justify-center py-2 px-3 sm:px-6 lg:px-8 text-white">
      <div className='p-2'>
        <div className="w-[300px] max-w-md space-y-2 md:w-[400px] lg:w-[400px]">
            <Image
                src={Logo}
                className="mx-auto text-sky-600 h-20 w-20 rounded-full"
                alt="Logo de página"
            />
            <h2 className="text-center text-3xl lg:text-4xl font-bold"> Login </h2>
          {/*loginMutation.error && <div> <p className="font-bold text-red-700" > {loginMutation.error.response.data.detail} </p> </div> 
          */}
          <form action={dispatch} className="p-3 space-y-2 md:space-y-4">

              <label htmlFor="username" className="block text-sm lg:text-base font-medium">UserName</label>
              <input type="username" name="username" id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="your username"/>

              <label htmlFor="password" className="block text-sm lg:text-base font-medium">Password</label>
              <input type="password" name="password" id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••" className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"/>

              <button type='submit' className="bg-sky-400 w-full hover:bg-sky-500 p-2 rounded-full text-white font-bold" aria-disabled={pending}>
                  Login
              </button>

              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
                >
                {errorMessage && (
                    <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
              </div>

          </form>

          <div className="flex items-center justify-between text-sm lg:ml-5">
              <Link href={'/register'}>
                Don`t have an account?
                <span className='hover:text-sky-500 ml-2 transition-colors'>
                  Sign up here!
                </span>
              </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login

/* 'use client';
import { lusitana } from '@/app/ui/fonts';
export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
*/
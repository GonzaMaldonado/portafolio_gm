"use client"

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Link from "next/link";
import Image from "next/image";
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
//import { toast } from 'react-hot-toast'
import Logo from '@/public/lion7.png';


const Login = () => {

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  /* const loginMutation = useMutation({
    mutationFn:() => loginReq(username, password),
    onSuccess:(res) => {
      toast.success("Login successfully");
    },
    onError: (error) => {
      toast.error("There was an error, please try to login again")
      console.log(error);
    }
  }) */

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
                placeholder="Enter your username"
                required
                className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />

              <label htmlFor="password" className="block text-sm lg:text-base font-medium">Password</label>
              <input type="password" name="password" id="password" 
                required
                placeholder="••••••••"
                minLength={6}
                className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />

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

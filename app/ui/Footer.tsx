"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';
//import { useMutation } from "@tanstack/react-query"
//import { emailRequest } from "../api/home"
//import { toast } from 'react-hot-toast'
//import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
//import Loader from "../components/Loader"


const Footer = () => {

  const pathname = usePathname()

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };


  /* const emailMutation = useMutation({
    mutationFn:() => emailRequest(values.name, values.email, values.message),
    onSuccess:() => {
      toast.success("Email send successfully")
      setValues({
        name: '',
        email: '',
        message: '',
      });
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
    //emailMutation.mutate()
  }

  //if (emailMutation.isLoading) return <Loader />

  return (
    <div className="sticky top-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 bg-gray-800 text-white font-bold" id="contacto">

    {pathname == '/' ? (
      <>
        <div className="sm:col-span-5 sm:col-start-2 mt-7 p-5 sm:p-0" id="contact">
          <h2 className="text-center text-2xl mb-2">Contactame</h2>
          <form onSubmit={handleSubmit}>
            <input
              value={values.name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="text-sm border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
            /> <br/>
            <input
              value={values.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="text-sm border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
            /> <br/>
            <input
              value={values.message}
              onChange={handleChange}
              name="message"
              id="message"
              placeholder="Write the message here ..."
              className="text-sm border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-24 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
            ></input> <br/>
            <button type='submit' className="bg-sky-400 w-full hover:bg-sky-500 p-2 px-5 rounded-full text-white font-bold">
                  Send
              </button>
          </form>
        </div>
    
        <div className="text-base sm:col-span-4 sm:col-start-8 sm:text-right p-4 mt-3 ml-3">
            <h2 className="mb-4 text-2xl">Contacto</h2>
            <h3>Correo electrónico</h3>
            <p className="mb-4 text-sm">gnmaldo06@gmail.com</p> 
            <h3>Teléfono</h3>
            <p>+54 3876-638203</p>

          <div className="flex sm:justify-end sm:items-end sm:mt-20" >
            <ul className="sm:col-span-4 sm:col-start-8 mt-10 sm:mt-20">
              <li className="inline-block mr-3">
                <a href="https://github.com/GonzaMaldonado" target="_blank" rel="noreferrer" >
                  {/* <FaGithub className="w-10 h-10" /> */}
                </a>
              </li>
              <li className="inline-block mr-3">
                <a href="https://www.linkedin.com/in/gonzalo-maldonado06/" target="_blank" rel="noreferrer">
                 {/*  <FaLinkedin className="w-10 h-10" /> */}
                </a>
              </li>
              <li className="inline-block mr-3">
                <a href="https://www.instagram.com/gonzamaldonado.06/" target="_blank" rel="noreferrer">
                  {/* <FaInstagram className="w-10 h-10" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm sm:col-span-10 sm:col-start-2 text-center bg-gray-500 p-3">
          <p>&copy; 2023 Portafolio. Todos los derechos reservados.</p>
        </div>

      </>
    ) : (
      <div className="text-sm sm:col-span-12 text-center bg-gray-500 p-3">
        <p>&copy; 2023 Portafolio. Todos los derechos reservados.</p>
      </div>
    )}

  </div>

  )
}

export default Footer
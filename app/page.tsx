import Image from "next/image";
import SkillsTable from "@/app/ui/skills/table";
import Perfil from "@/public/perfil.jpg";
import { SkillsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";


const Home = () => {

  return (
    <main className='font-mono text-white p-4 md:p-5'>

      <section  className="py-6 lg:py-9 xl:py-1 px-4 lg:px-8 mb-20 lg:mb-36 h-full lg:h-[80vh] mx-auto bg-gradient-to-r from-gray-900 to-blue-950 rounded-xl shadow-inner shadow-gray-900  sm:flex sm:items-center sm:justify-center">
        <Image
          src={Perfil}
          className="block mx-auto h-56 w-56 sm:h-96 sm:w-96 object-cover rounded-xl border sm:mx-7"
          alt="Foto de perfil"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mt-2 sm:ml-4">
              Gonzalo Maldonado
            </p>
            <p className="text-slate-300 font-medium sm:ml-4 md:text-lg lg:text-xl">
              Programador FullStack
            </p>
          </div>
          <p className="px-4 py-1 text-sm md:text-base text-slate-300 font-semibold hover:text-white">Bienvenido a mi portafolio. Aquí podrás encontrar una muestra de mis proyectos y habilidades.</p>
        </div>
      </section>

      <section id="sobre_mi" className='h-[80vh] p-5 lg:p-20 mb-32'>
        <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase mb-3">Acerca de mi</h2>
        <div className="bg-slate-800 rounded-md p-5 lg:p-20 shadow-sm shadow-blue-300 flex flex-col justify-center items-center sm:w-5/6 mx-auto">
          <p className="text-sm lg:text-base font-semibold text-gray-200">
          Inicios en la programación con el stack MERN, donde hice una Web Personal.<br />
          En distintas plataformas aprendí <b>Python (Django, DRF, FastAPI básico)</b>, <b>SQL (PostgreSQL, MySQL)</b><br />
          Con conocimiento básico en <b>Bootstrap y Tailwind CSS</b><br />
          Autodidacta, con muchas ganas de seguir aprendiendo, mejorar tanto en teoría como en buenas prácticas<br />
          Dispuesto, a aprender nuevas tecnologías, si así el equipo lo requiere<br />
          </p>
          <hr className="my-1 lg:w-5/6" />
          <p className="text-sm font-semibold text-gray-200">Actualmente cursando Fullstack con Python - Codo a Codo 4.0</p>
        </div>
      </section>

      <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase" id="proyectos">Proyectos</h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-1 py-6">

          <article className="w-full flex flex-col h-fit gap-2 p-2 my-2">
              <p className="text-blue-900 text-xl font-extrabold">Portafolio</p>
              <div className="lg:h-56 flex flex-col p-4 text-lg font-semibold hover:shadow-md hover:shadow-slate-300 border rounded-sm">
                  <div className="flex flex-col lg:justify-center md:flex-row gap-3 justify-between">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <div className="w-60 h-32">
                          <Image
                            src="/next.svg"
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                            alt="Foto de proyecto"
                          />
                          </div>
                          <div className="flex flex-col gap-1">
                            <ol className='font-normal text-sm list-disc p-2'>
                              <li>Hecho con <strong className='text-blue-600'>React</strong>, <strong className='text-blue-600'>Tailwind</strong> para el frontend</li>
                              <li><strong className='text-blue-600'>Django/DRF</strong> para el backend</li>
                              <li>Autenticación implementada con <strong className='text-blue-600'>JWT</strong></li>
                              <li>Usuarios registrados con acceso a páginas de Posts y Tasks(esta última con operación CRUD)</li>
                              <li>Base de Datos en <strong className='text-blue-600'>PostgreSQL</strong></li>
                              <li>Manejo de formulario para envío de correos</li>
                              <li>Responsive Design</li>
                            </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </article>

          <article className="w-full flex flex-col h-fit gap-2 p-2 my-2">
              <p className="text-green-400 text-xl font-extrabold">Ecommerce</p>
              <div className="lg:h-56 flex flex-col lg:justify-center p-4 text-lg font-semibold hover:shadow-md hover:shadow-slate-300 border rounded-sm">
                  <div className="flex flex-col md:flex-row gap-3 justify-between">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <div className="w-56 h-36">
                            <Image
                              src="/next.svg"
                              width={100}
                              height={100}
                              className="w-full h-full object-contain"
                              alt="Foto de Ecommerce"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <ol className='font-normal text-sm list-disc p-2'>
                              <li>Hecho con <strong className='text-green-500'>Django</strong></li>
                              <li>Frontend también implementando <strong className='text-green-500'>Bootstrap</strong></li>
                              <li>Implementando autenticación de Django</li>
                              <li>Base de Datos en <strong className='text-green-500'>PostgreSQL</strong></li>
                              <li><strong className='text-green-500'>Stripe</strong> para manejar pagos en línea</li>
                            </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </article>

          <article className="w-full flex flex-col h-full gap-2 p-2 my-2">
              <div className='lg:flex lg:gap-7'>
                <p className="text-red-700 text-xl font-extrabold">Booking Plataform</p>
                <p className="text-sm">en proceso...</p>
              </div>
              <div className="lg:h-56 flex flex-col lg:justify-center p-4 text-lg font-semibold hover:shadow-md hover:shadow-slate-300 border rounded-sm">
                  <div className="flex flex-col md:flex-row gap-3 justify-between">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <div className="w-56 h-36">
                            <Image
                                src="/next.svg"
                                width={100}
                                height={100}
                                className="w-full h-full object-contain"
                                alt="Foto de booking"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <ol className='font-normal text-sm list-disc p-2'>
                              <li>Backend con <strong className='text-red-600'>Python-Django</strong></li>
                              <li>Frontend no terminado, pero se implementaría <strong className='text-red-600'>React</strong>, <strong className='text-red-600'>Tailwind</strong></li>
                              <li>Autenticación implementada con <strong className='text-red-600'>JWT</strong></li>
                              <li>Con operación CRUD para las reservas</li>
                              <li>Base de Datos en <strong className='text-red-600'>PostgreSQL</strong></li>
                              <li><strong className='text-red-600'>Stripe</strong> para realizar pagos</li>
                            </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </article>

          <article className="w-full flex flex-col h-full gap-2 p-2 my-2">
              <p className="text-blue-900 text-xl font-extrabold">Proyectos varios</p>
              <div className="lg:h-56 flex flex-col lg:justify-center p-4 text-lg font-semibold hover:shadow-md hover:shadow-slate-300 border rounded-sm">
                  <div className="flex flex-col md:flex-row gap-3 justify-between">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <div className="w-60 h-36">
                            <Image
                                  src="/next.svg"
                                  width={100}
                                  height={100}
                                  className="w-full h-full object-contain"
                                  alt="Foto de github"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className='text-base'>Proyectos para práctica que se encuentran en mi Github</p>
                            <ol className='font-normal text-sm list-disc p-2'>
                              <li>Chat realtime con Django utilizando <strong>channels</strong></li>
                              <li>Una app del clima que se conecta a una API</li>
                              <li>Un chat que se conecta a la API de OpenAI</li>
                            </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </article>

      </section>

      <h5 className="text-sm font-bold uppercase text-center mt-32 sm:text-xl lg:text-2xl" id="skills">Lenguajes - Frameworks - Herramientas</h5>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 lg:gap-x-0 gap-y-8 my-20">
        <Suspense  fallback={<SkillsSkeleton />}>
          <SkillsTable />
        </Suspense>
      </div>

      {/* {error <p className='font-bold text-center text-yellow-400'>No se cargaron Skills</p> */}
         
    </main>
  )
}

export default Home
import Image from 'next/image';

export default async function ProjectsTable() {

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-1 py-6">

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
  );
}
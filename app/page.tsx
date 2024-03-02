import Image from "next/image";
import SkillsTable from "@/app/ui/skills/table";
import ProjectsTable from "@/app/ui/projects/table";
import { SkillsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import Perfil from "@/public/perfil.jpg";


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
            <p className="text-xl md:text-2xl lg:text-4xl text-white font-semibold mt-2 sm:ml-4">
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
      <ProjectsTable />

      <h5 className="text-sm font-bold uppercase text-center mt-32 sm:text-xl lg:text-2xl" id="skills">Lenguajes - Frameworks - Herramientas</h5>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 lg:gap-x-0 gap-y-8 my-20">
        <Suspense  fallback={<SkillsSkeleton />}>
          <SkillsTable />
        </Suspense>
      </div>
         
    </main>
  )
}

export default Home
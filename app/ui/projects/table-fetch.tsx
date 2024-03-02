import Image from 'next/image';
import { fetchProjects } from '@/app/lib/data';

export default async function ProjectsTable() {
  const projects = await fetchProjects();
  const items: string[][] = [];
  for (let index = 0; index < projects.length; index++) {
    items.push(projects[index].items.split("-")) // Separando en arrays de strings los items de cada proyecto
  }

  return (
    <article className="w-full flex flex-col h-fit gap-2 p-2 my-2">
    {projects?.map(project => (
        <>
            <p className="text-blue-900 text-xl font-extrabold">{project.name}</p>
            <div className="lg:h-56 flex flex-col p-4 text-lg font-semibold hover:shadow-md hover:shadow-slate-300 border rounded-sm">
                <div className="flex flex-col lg:justify-center md:flex-row gap-3 justify-between">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <div className="w-60 h-32">
                            <Image
                                src={`/projects${project.image_url}`}
                                width={100}
                                height={100}
                                className="w-full h-full object-contain"
                                alt={`Foto de ${project.name}`}
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            {project?.description && (<p className='text-base'>{project.description}</p>)}
                            <ol className='font-normal text-sm list-disc p-2'>

                            {items?.[project.order_num -1].map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}

                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ))}
    </article>
  );
}
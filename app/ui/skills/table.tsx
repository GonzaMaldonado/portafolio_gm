import Image from 'next/image';
import { fetchSkills } from '@/app/lib/data';

export default async function SkillsTable() {
  const skills = await fetchSkills();

  return (
    <>
        {skills?.map(skill => 
        <div key={skill.id} className="mx-auto justify-center items-center">
            <div className="h-16 lg:h-20 w-16 lg:w-20 rounded-2xl mx-auto">
            <Image
                src={skill.image_url}
                width={50}
                height={50}
                alt={`Imagen de ${skill.name}`}
                className="h-full w-full object-cover rounded-3xl bg-slate-700"
            />
            </div>
            <p className='text-center text-white font-bold'>{skill.name}</p>
        </div>
        )}
    </>
  );
}
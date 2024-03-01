import Image from 'next/image';
import { UpdateSkill, DeleteSkill } from '@/app/ui/skills/buttons';
import { fetchSkills } from '@/app/lib/data';

export default async function SkillsTable() {
  const skills = await fetchSkills();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {skills?.map((skill) => (
              <div
                key={skill.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={skill.image_url}
                        width={10}
                        height={10}
                        className="w-10 h-10 mr-2 rounded-full"
                        alt={`${skill.name} picture`}
                        />
                      <p>{skill.name}</p>
                      <p>{skill.order_num}</p>
                    </div>
                  </div>
                  
                </div>
                <div className="flex w-full items-center pt-4">

                  <div className="flex justify-end gap-1">
                    <UpdateSkill id={skill.id} />
                    <DeleteSkill id={skill.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Image
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Order
                </th>
                <th scope="col" className="flex align-center justify-end py-4 pr-10">
                  <span>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {skills?.map((skill) => (
                <tr
                  key={skill.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">

                      <Image
                        src={skill.image_url}
                        width={50}
                        height={50}
                        className="object-cover rounded-full"
                        alt={`${skill.name} picture`}
                        />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{skill.name}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{skill.order_num}</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateSkill id={skill.id} />
                      <DeleteSkill id={skill.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
import Form from '@/app/ui/skills/edit-form';
import Breadcrumbs from '@/app/ui/skills/breadcrumbs';
import { fetchSkillById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [skill] = await Promise.all([
    fetchSkillById(id),
  ]);

  if (!skill) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Skills', href: '/admin/skills' },
          {
            label: 'Edit Skill',
            href: `/admin/skills/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form skill={skill} />
    </main>
  );
}

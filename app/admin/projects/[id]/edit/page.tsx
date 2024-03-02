import Form from '@/app/ui/projects/edit-form';
import Breadcrumbs from '@/app/ui/admin/breadcrumbs';
import { fetchProjectById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [project] = await Promise.all([
    fetchProjectById(id),
  ]);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/admin/projects' },
          {
            label: 'Edit Project',
            href: `/admin/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form project={project} />
    </main>
  );
}

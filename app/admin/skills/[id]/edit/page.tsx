import Form from '@/app/ui/skills/edit-form';
//import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
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
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      /> */}
      <Form skill={skill} />
    </main>
  );
}

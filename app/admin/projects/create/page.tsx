import Form from '@/app/ui/projects/create-form';
import Breadcrumbs from '@/app/ui/admin/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/admin/projects' },
          {
            label: 'Create Project',
            href: '/admin/projects/create',
            active: true,
          },
        ]}
    />
      <Form />
    </main>
  );
}
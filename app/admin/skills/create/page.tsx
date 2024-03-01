import Form from '@/app/ui/skills/create-form';
import Breadcrumbs from '@/app/ui/skills/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Skills', href: '/admin/skills' },
          {
            label: 'Create Skill',
            href: '/admin/skills/create',
            active: true,
          },
        ]}
    />
      <Form />
    </main>
  );
}
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Skills',
};


import Table from '@/app/ui/skills/table-admin';
import { CreateItem } from '@/app/ui/admin/buttons';
import { TableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateItem name={"skills"} />
      </div>
        <Suspense key={"skills"} fallback={<TableSkeleton />}>
          <Table />
      </Suspense>
    </div>
  );
}
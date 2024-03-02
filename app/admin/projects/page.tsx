import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Projects',
};


import Table from '@/app/ui/projects/table-admin';
import { CreateItem } from '@/app/ui/admin/buttons';
import { TableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateItem name={"projects"} />
      </div>
        <Suspense key={"projects"} fallback={<TableSkeleton />}>
          <Table />
      </Suspense>
    </div>
  );
}
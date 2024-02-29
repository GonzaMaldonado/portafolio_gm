import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Skills',
};


import Table from '@/app/ui/skills/table';
import { CreateSkill } from '@/app/ui/skills/buttons';
import { lusitana } from '@/app/ui/fonts';
import { SkillsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Skills</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateSkill />
      </div>
        <Suspense key={"skills"} fallback={<SkillsTableSkeleton />}>
        <Table />
      </Suspense>
    </div>
  );
}
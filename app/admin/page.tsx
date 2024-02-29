import { lusitana } from '@/app/ui/fonts';
 
export default async function Page() {
 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-white text-xl text-center md:text-5xl`}>
        Administrador
      </h1>
    </main>
  );
}
import Link from 'next/link';
import Image from "next/image";
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/public/lion.png';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 p-4 md:h-40"
        href={"/"}
      >
        <Image src={Logo} alt="Logo de portafolio" className='w-14 md:w-24 h-14 md:h-24 rounded-full object-cover' />
      </Link>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-1">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}

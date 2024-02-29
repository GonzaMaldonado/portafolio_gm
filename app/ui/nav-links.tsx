'use client';
 
import { BoltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Skills', href: '/admin/skills', icon: BoltIcon },
  { name: 'Projects', href: '/admin/projects', icon: CodeBracketIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''} flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <LinkIcon className="hidden md:block w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
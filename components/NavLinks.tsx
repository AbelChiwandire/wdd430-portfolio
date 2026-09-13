'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/contacts', label: 'Contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <ul className="flex gap-6">
            {NAV_ITEMS.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

                return (
                <li key={href}>
                    <Link
                        key={href}
                        href={href}
                        className={isActive ? 'active' : ''}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {label}
                    </Link>
                </li>
                );
            })}
          </ul>
    </nav>
  );
}

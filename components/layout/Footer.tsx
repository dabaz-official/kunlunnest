import Link from 'next/link';
import Image from 'next/image';

import { footerNavItems } from '@/lib/nav';
import social from '@/lib/social';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8 gap-y-6">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="昆仑巢的logo。"
            width={100}
            height={100}
          />
        </Link>
        <div className="mt-6 flex justify-center space-x-10">
          {social.map((item) => (
            <a key={item.name} href={item.href} className="text-neutral-400 hover:text-neutral-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <nav className="mt-6 -mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {footerNavItems.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-neutral-600 hover:text-neutral-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-6 text-center text-xs leading-5 text-neutral-600">
          &copy; {year} 北京智能之路科技有限公司. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

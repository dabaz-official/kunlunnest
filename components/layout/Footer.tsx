import Link from 'next/link';
import Image from 'next/image';

import { footerNavItems } from '@/lib/nav';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-8 pb-4 sm:pt-12 sm:pb-4 lg:px-8 gap-y-6">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {footerNavItems.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-neutral-600 hover:text-neutral-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="pt-8 text-center text-xs leading-5 text-neutral-600">
          &copy; {year} 北京智能之路科技有限公司. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

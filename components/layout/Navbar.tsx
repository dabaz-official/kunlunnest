'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HiBars3,
  HiChevronDown,
  HiXMark
} from 'react-icons/hi2';
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/react';

import { headerNavItems } from '@/lib/nav';

export function Navbar() {
  const [menuOpen, openMenu] = useState(false)

  return (
    <header className="fixed top-0 z-20 w-full bg-white border-b border-neutral-100">
      <nav className="mx-auto flex items-center justify-between max-w-7xl p-6 lg:px-8">
        <div className="flex flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5"
          >
            <Image
              src="/logo.svg"
              alt="昆仑巢的Logo。"
              width={850}
              height={266}
              priority={true}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => openMenu(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
          >
            <HiBars3 className='h-6 w-6' />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {headerNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-neutral-600 hover:text-neutral-900 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="mailto:info@kunlunnest.cn"
            className="text-sm font-semibold leading-6 text-neutral-600 hover:text-neutral-900 transition">
              联系
            </Link>
        </div>
      </nav>

      <Dialog
        open={menuOpen}
        onClose={openMenu}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo.svg"
                alt="昆仑巢的Logo。"
                width={850}
                height={266}
                priority={true}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => openMenu(false)}
              className="-m-2.5 rounded-md p-2.5 text-neutral-700 outline-none"
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/10">
              <div className="py-6 space-y-2">
                {headerNavItems.map((item) => (
                  <div
                    key={item.name}
                    className="-mx-3"
                  >
                    <Link
                      href={item.href}
                      className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  )
}
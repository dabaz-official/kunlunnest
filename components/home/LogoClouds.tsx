import { logos } from '@/lib/logos';
import Image from 'next/image';

export function LogoClouds() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
          创新生态合作伙伴
        </h1>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.companies.map((logo) => (
            <div
              key={logo.alt}
              className='flex flex-col gap-y-6'
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={100}
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              />
              <p className='text-sm text-neutral-500'>
                {logo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

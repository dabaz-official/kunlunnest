import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 z-20 w-full bg-white/80 border-b border-neutral-100 backdrop-blur-sm">
      <nav className="mx-auto flex items-center justify-between max-w-7xl py-4 px-6 lg:px-8">
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
              className="h-6 w-auto"
            />
          </Link>
        </div>
      </nav>
    </header>
  )
}
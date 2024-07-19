'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">出错了</h1>
      <p className="text-lg">请稍后再试。</p>
      <Link
        href="/"
        className="text-blue-600 hover:underline hover:text-blue-500 transition"
      >
        返回主页 -&gt;
      </Link>
    </div>
  )
}

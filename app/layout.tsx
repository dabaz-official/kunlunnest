import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { inter, notoSansSC, notoSerifSC } from './fonts';
import { seo } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/nav';

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    default: seo.title,
    template: '%s | 昆仑巢',
  },
  description: seo.description,
  keywords: '昆仑巢, KunlunNest, AI来不来, 巢青年, 苏菂说, 3D打印, 人工智能, 创业',
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://kunlunnest.cn',
    siteName: '昆仑巢',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: seo.title,
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={cn('h-full antialiased select-none', inter.variable, notoSansSC.variable, notoSerifSC.variable)}
      suppressHydrationWarning
    >
      <Navbar />
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

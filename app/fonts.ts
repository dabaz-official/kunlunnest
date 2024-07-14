import localFont from 'next/font/local';
import {
  Inter,
  Noto_Sans_SC,
} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

const notoSerifSC = localFont({
  src: [
    {
      path: './fonts/NotoSerifSC-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifSC-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifSC-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifSC-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto-serif-sc',
  display: 'swap',
});

export { inter, notoSansSC, notoSerifSC };
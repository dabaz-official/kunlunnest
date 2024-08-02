import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: './Inter_28pt-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Inter_28pt-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Inter_28pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Inter_28pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter_28pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter_28pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Inter_28pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Inter_28pt-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Inter_28pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})
export const seo = {
  title: '昆仑巢',
  description: '创业的路，你并不孤独——昆仑巢已为你而筑。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://kunlunnest.cn'
      : 'http://localhost:3000'
  ),
} as const
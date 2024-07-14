export default async function sitemap() {
  let routes = ['', '/about'].map((route) => ({
    url: `https://kunlunnest.cn${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
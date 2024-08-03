const posts = [
  {
    id: 1,
    title: '“Hello不躺平青年!” 德胜街道 & 昆仑巢携手汇聚青年挺膺担当的青春力量。',
    href: 'https://mp.weixin.qq.com/s/029zvOB63iLxAtV3n3GusQ',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      '/images/news/54.webp',
    date: '2024年5月5日',
    datetime: '2024-05-05',
    category: { title: 'Marketing', href: '#' },
    organizer: {
      name: '巢青年',
      href: '#',
      imageUrl:
        '/images/news/54.webp',
    },
  },
  
]

export default function NewsSection() {
  return (
    <div className="relative isolate -z-10 pt-14">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight">
              巢动态
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              了解昆仑巢的最新动态。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-900 via-neutral-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-neutral-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.organizer.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.organizer.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
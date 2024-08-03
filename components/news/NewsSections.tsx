const posts = [
  {
    id: 3,
    title: '以智为擎，拾阶而上 | 首期“智阶阁沙龙”在西城区政务服务中心举行。',
    href: 'https://mp.weixin.qq.com/s/ZiRCm225kliFccP9kED6Mw',
    description:
      '6月17日，首期“智阶阁沙龙”在西城区政务服务中心举行。智阶阁沙龙是西城区政务服务局携手西城园管委会（西城区科委）与昆仑巢共同打造的企业交流平台，该平台旨在深度整合政府惠企政策，活化区内商业资源，为企业提供一个全面展示、深入交流、广泛合作的舞台。',
    imageUrl:
      '/images/news/zhijiege.webp',
    date: '2024年6月21日',
    datetime: '2024-06-21',
    organizer: {
      name: '西城区政务服务局',
      href: '#',
      imageUrl:
        '/images/news/zhijiege.webp',
    },
  },
  {
    id: 2,
    title: '第三届AIGC中国开发者大会在昆仑巢圆满落幕！',
    href: 'https://mp.weixin.qq.com/s/kHN5U5Mb0sL6Z6EGrEageA',
    description:
      '5月25日，第三届AIGC中国开发者大会在昆仑巢圆满落幕。本次大会由中关村产业技术联盟联合会指导，北京市科学技术委员会、中关村科技园区委员会支持；由AIGCLINK联合中关村超互联新基建联盟、行行AI、铅笔道、昆仑巢、软积木联合主办，20余家AI领域社区和媒体协办。此次大会是一次面向国内大模型从业者的一次大模型落地实验经验交流盛宴，旨在帮助AIGC（生成式人工智能）从业者更好熟悉大模型行业应用场景，探讨多模态大模型和具身智能技术带来的AIGC行业变革。',
    imageUrl:
      '/images/news/aigc.webp',
    date: '2024年5月30日',
    datetime: '2024-05-30',
    organizer: {
      name: 'AIGCLINK',
      href: '#',
      imageUrl:
        '/images/news/54.webp',
    },
  },
  {
    id: 1,
    title: '“Hello不躺平青年!” 德胜街道 & 昆仑巢携手汇聚青年挺膺担当的青春力量。',
    href: 'https://mp.weixin.qq.com/s/029zvOB63iLxAtV3n3GusQ',
    description:
      '青春正当时，逐梦新征程。为深入学习贯彻习近平总书记五四青年节对全国广大青年寄语，聚焦新质生产力激发地区青年向“新”力。5月4日，德胜街道联合昆仑巢共同发起“Hello不躺平青年！”青年宣讲活动，昆仑巢发布专注青年交流成长的“巢青年”品牌。西城团区委副书记（主持工作）、区青联主席朱晓冬，德胜街道工委副书记、办事处主任马佩鸿，德胜街道工委副书记陈曦，北京联合大学应用文理学院党委副书记李岩，昆仑巢创始人苏菂，总经理王海利及各领域创业青年参加活动。',
    imageUrl:
      '/images/news/54.webp',
    date: '2024年5月5日',
    datetime: '2024-05-05',
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
            <p className="mt-2 text-lg leading-8 text-neutral-600">
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

                <div className="flex flex-wrap items-center gap-y-1 gap-x-2 overflow-hidden text-sm leading-6 text-neutral-300">
                  <time dateTime={post.datetime}>
                    {post.date}
                  </time>
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    {post.organizer.name}
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href} target="_blank">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-neutral-300 text-sm line-clamp-2">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
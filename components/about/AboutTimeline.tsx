const timeline = [
  {
    name: '公司成立',
    description:
      '苏菂成立北京智能之路科技有限公司，是一家从事科技推广和应用服务业为主的科技型企业。',
    date: '2023 年 7 月',
    dateTime: '2023-07',
  },
  {
    name: '昆仑巢开幕',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: '2023 年 11 月',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]

export default function AboutTimeline() {
  return (
    <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-blue-600"
            >
              <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-neutral-900">{item.name}</p>
            <p className="mt-1 text-sm leading-7 text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
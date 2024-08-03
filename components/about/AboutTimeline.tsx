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
      '“昆仑巢” 于 11 月 18 日正式开幕，是科技也是极客精神汇聚的盛宴。',
    date: '2023 年 11 月',
    dateTime: '2021-12',
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
            <p className="mt-1 text-md leading-7 text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
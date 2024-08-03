import Title from "@/components/ui/Title";

const NetworkNavigations = [
  {
    title: "资源库",
    description: "寻找你想要的资源。",
    href: "http://dayuoa.com/hub/kunlunnest",
    img: {
      src: "/images/network/handshake.webp",
      alt: "两个人在握手。"
    }
  },
  {
    title: "知识库",
    description: "涨知识。",
    href: "http://dayuoa.com/info/kunlunnest",
    img: {
      src: "/images/network/knowledge.webp",
      alt: "图书馆。"
    }
  },
]

export default function NetworkNavigation() {
  return (
    <div className="bg-white relative isolate -z-10 pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-0 lg:max-w-none">
        <Title
          title="巢脉"
          description="寻找资源，交流沟通。"
        />
        <div className="mt-16 sm:mt-20 grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
          {NetworkNavigations.map((item) => (
            <div
              key={item.title}
              className="relative flex"
            >
              <img
                src={item.img.src}
                alt={item.img.alt}
                className="absolute inset-0 h-108 w-full object-cover object-center"
              />
              <div className="relative flex w-full flex-col items-start justify-end p-8 sm:p-12 bg-black bg-opacity-50">
                <p className="text-2xl font-bold text-white">{item.title}</p>
                <h2 className="mt-1 text-lg font-medium text-neutral-300 text-opacity-75">{item.description}</h2>
                <a
                  href={item.href}
                  target="_blank"
                  className="mt-1 text-md font-medium text-neutral-100 hover:text-neutral-200 hover:underline transition-all"
                >
                  进入 -&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
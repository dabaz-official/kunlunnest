import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold text-neutral-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            昆仑巢，如同一片火花四溅的舞台，将不同领域的智慧和创意汇聚一堂
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-md leading-8 text-neutral-900">
              这里不仅仅是一个简单的场所，更是一个充满活力、激发创新灵感的社交中心。开业不到两周，仅仅是通过聊天讨论海外话题的朋友，合作的概率就呈现出相当之高。在这个独特的空间里，行业的藩篱被打破，每一个参与者都能感受到一种跨越界限的自由氛围。这是一个真正的创业者乐园，一个激发思想交流的聚集地。
            </p>
          </div>
          <Image
            src="/images/home/hero.jpg"
            alt="昆仑巢的图片。"
            width={1920}
            height={800}
            quality={75}
            priority={true}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  )
}
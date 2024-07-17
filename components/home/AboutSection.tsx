import Image from 'next/image';
import Link from 'next/link';

import Text from '@/components/ui/Text';

export function AboutSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <Text
              title="关于昆仑巢"
              subtitle="About Kun Lun Nest"
              text={[
                "“昆仑巢”是一个新兴的科技和极客精神汇聚地，由车库咖啡创始人苏菂、联众游戏创始人鲍岳桥，以及数十位共同发起人和 100 多位共建人共同努力打造。经过半年多的精心筹备，“昆仑巢”于 2023 年 11 月 18 日正式开幕。",
                "昆仑巢，如同一片火花四溅的舞台，将不同领域的智慧和创意汇聚一堂。这里不仅仅是一个简单的场所，更是一个充满活力、激发创新灵感的社交中心。开业不到两周，仅仅是通过聊天讨论海外话题的朋友，合作的概率就呈现出相当之高。",
                "在这个独特的空间里，行业的藩篱被打破，每一个参与者都能感受到一种跨越界限的自由氛围。这是一个真正的创业者乐园，一个激发思想交流的聚集地。",
                "为什么取名“昆仑巢”？昆仑山是中国文化里的最高的山以及精神象征，取名“昆仑巢”予以这里追求精神层面更多一些，之所以巢字结尾，希望这里变成一个大家共筑之巢，一个很多人有归属感的地方，希望做成一个社会价值很大的企业。"
              ]}
            />
            <div className="mt-10 flex">
              <Link
                href="/about"
                className="text-base leading-7 text-blue-600"
              >
                深入了解昆仑巢 <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/images/home/hero.jpg"
                alt="昆仑巢的图片。"
                width={1920}
                height={800}
                quality={75}
                priority={true}
              />
              <div className="absolute inset-0 bg-neutral-900/80 mix-blend-multiply" />
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “希望这里变成一个大家共筑之巢，一个很多人有归属感的地方，希望做成一个社会价值很大的企业。”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-neutral-300">
                  <strong className="font-semibold text-white">王海利</strong> 昆仑巢 CEO
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
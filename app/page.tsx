import Text from '@/components/ui/text';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-20 lg:mt-0">
      <div>
        <Image
          src="/images/home/hero.jpg"
          alt="昆仑巢的照片。"
          width={1920}
          height={800}
          sizes='(100vw) 100vw, (50vw) 50vw, (33vw) 33vw, (25vw) 25vw'
          quality={75}
          priority={true}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="px-6 lg:px-8">
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
      </div>
    </div>
  );
}

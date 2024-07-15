import Text from '@/components/ui/text';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-20 lg:mt-0">
      <div>
        <Image
          src="/images/hero.jpg"
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
            "“昆仑巢”是一个新兴的科技和极客精神汇聚地，由车库咖啡创始人苏菂、联众游戏创始人鲍岳桥，以及数十位共同发起人和 100 多位共建人共同努力打造。经过半年多的精心筹备，“昆仑巢”于 2023 年 11 月 18 日正式开幕。"
          ]}
        />
      </div>
    </div>
  );
}

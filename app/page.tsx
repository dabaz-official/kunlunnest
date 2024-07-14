import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-20 lg:mt-0">
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
  );
}

import React from 'react';
import Image from 'next/image';

interface ImageWithCaptionProps {
  imageUrl: string;
  imageAlt: string;
  width: number;
  height: number;
  caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  imageUrl,
  imageAlt,
  width,
  height,
  caption
}) => {
  return (
    <figure className="flex flex-col gap-y-2">
      <div className="w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={width}
          height={height}
          layout="responsive"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <figcaption className="">{caption}</figcaption>
    </figure>
  );
};

export default ImageWithCaption;
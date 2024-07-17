'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { images } from '@/lib/images';

export function HomeCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.banner.map((image, index) => (
          <div
            key={index}
            className="min-w-full object-cover"
          >
            <Image
              src={image.src}
              alt="banner"
              width={image.width}
              height={image.height}
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
        ))}
      </div>
    </div>
  )
}
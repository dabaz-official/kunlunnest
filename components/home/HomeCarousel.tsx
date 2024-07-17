'use client';

import React from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './HomeCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { images } from '@/lib/images';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const HomeCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

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
        <div className="flex flex-wrap justify-end items-center -mr-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'bg-transparent touch-manipulation cursor-pointer border-0 p-0 m-0 w-10 h-10 flex items-center justify-center rounded-full'.concat(
                index === selectedIndex ? 'shadow-lg shadow-neutral-900/50' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { HomeCarousel }
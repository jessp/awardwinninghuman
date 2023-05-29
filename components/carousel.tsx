import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image';

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import styles from './carousel.module.scss'
import {
  PrevButton,
  NextButton,
} from './carouselButtons'
import ThumbButton from './thumbButton'


type Props = {
  slides: string[]
  alt: string[]
  options?: EmblaOptionsType
}

const Carousel = ({ slides, alt, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)


  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
  }, [emblaApi, emblaThumbsApi, setSelectedIndex])


  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi, emblaThumbsApi],
  )

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((elem, index) => (
              <div className={styles.embla__slide} key={elem}>
                <div className={styles.embla__slide__img}>
                  <Image
                  src={elem}
                  fill={true}
                  quality={100}
                  alt={alt[index]}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonHolder}>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
      <div className={styles.embla_thumbs}>
          <div className={styles.embla_thumbs__viewport} ref={emblaThumbsRef}>
            <div className={styles.embla_thumbs__container}>
              {slides.map((elem, index) => (
                <ThumbButton
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={elem}
                  key={index}
                  alt={alt[index]}
                />
              ))}
              </div>
            </div>
          </div>
    </div>
  )
}

export default Carousel

import React, { useState, useEffect, useCallback } from 'react'

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import styles from './carousel.module.scss'
import {
  PrevButton,
  NextButton,
} from './carouselButtons'

type Props = {
  slides: string[]
  alt: string[]
  options?: EmblaOptionsType
}

const Carousel = ({ slides, alt, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((elem, index) => (
            <div className={styles.embla__slide} key={elem}>
              <img
                className={styles.embla__slide__img}
                src={elem}
                alt={alt[index]}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonHolder}>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  )
}

export default Carousel

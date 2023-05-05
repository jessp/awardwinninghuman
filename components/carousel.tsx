import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import styles from './carousel.module.scss'

type Props = {
  slides: string[]
  options?: EmblaOptionsType
}

const Carousel = ({ slides, options }: Props) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((elem) => (
            <div className="embla__slide" key={elem}>
              <img
                className="embla__slide__img"
                src={elem}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel

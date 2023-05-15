import React from 'react'
import styles from './thumbButton.module.scss'

type Props = {
  selected: boolean
  imgSrc: string
  index: number
  alt: string
  onClick: () => void
}

const ThumbButton = ({ selected, imgSrc, index, alt, onClick }: Props) => (
    <div
      className={`${styles.embla_thumbs__slide} ${selected ? styles.embla_thumbs__slide__selected : ''}`}
    >
      <button
        onClick={onClick}
        className={styles.embla_thumbs__slide__button}
        type="button"
      >
        <img
          className={styles.embla_thumbs__slide__img}
          src={alt}
          alt="Your alt text"
        />
      </button>
    </div>
)

export default ThumbButton

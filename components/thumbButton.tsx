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
          src={imgSrc}
          alt={alt}
        />
      </button>
    </div>
)

export default ThumbButton

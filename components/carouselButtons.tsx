import React from 'react';
import styles from './carouselButtons.module.scss'


type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className={`${styles.car_button}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className={styles.car_button_svg} viewBox="0 0 40 24">
        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM40.5 10.5H2V13.5H40.5V10.5Z" 
        fill="black"/>
      </svg>
    </button>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className={`${styles.car_button}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className={styles.car_button_svg} viewBox="0 0 40 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5607 10.9393C40.1464 11.5251 40.1464 12.4749 39.5607 13.0606L30.0147 22.6066C29.4289 23.1924 28.4792 23.1924 27.8934 22.6066C27.3076 22.0208 27.3076 21.0711 27.8934 20.4853L34.8787 13.5L-8.34533e-07 13.5L-1.0968e-06 10.5L34.8787 10.5L27.8934 3.51471C27.3076 2.92892 27.3076 1.97917 27.8934 1.39339C28.4792 0.807599 29.4289 0.807599 30.0147 1.39339L39.5607 10.9393Z" 
        fill="black"/>
      </svg>
    </button>
  )
}


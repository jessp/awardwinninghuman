import Scene from './scene';
import Flare from './flare';
import styles from './hero.module.scss'

type Props = {
  isWork: boolean
}


const Hero = ({ isWork }: Props) => (
  <div className={styles.heroHolder}>
    <p className={styles.intro}>Jess Peter is</p>
    <div className={styles.innerHeroHolder}>
      <div className={styles.textHolder}>
        <h1 className={styles.titleStyle}>
          <span className={styles.noShow}>award-</span><br/>
          <span>winning</span><br/>
          <span className={styles.noShow}>human</span>
        </h1>
      </div>
      <Scene isWork={isWork}/>
      <div className={styles.textHolder}>
        <p className={`titleClone ${styles.titleStyle}`} aria-hidden={"true"}>
          <span>award-</span><br/>
          <span className={styles.noShow}>winning</span><br/>
          <span>human</span>
        </p>
        <div className={styles.flareHolder} style={{ top: '0px', left : "0px", transform: "translate(calc(-50% - 0.75pt), calc(-50% + 0.75pt))" }}>
          <Flare/>
        </div>
        <div className={styles.flareHolder} style={{ top: '0px', left : "100%", transform: "translate(calc(-50% + 0.75pt), calc(-50% + 0.75pt))" }}>
          <Flare/>
        </div>
        <div className={styles.flareHolder} style={{ top: '100%', left : "0px", transform: "translate(calc(-50% - 0.75pt), calc(-50% + 1.5pt))" }}>
          <Flare/>
        </div>
        <div className={styles.flareHolder} style={{ top: '100%', left : "100%", transform: "translate(calc(-50% + 0.75pt), calc(-50% + 1.5pt))" }}>
          <Flare/>
        </div>

      </div>
    </div>
  </div>
)

export default Hero;





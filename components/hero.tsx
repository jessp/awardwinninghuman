import Scene from './scene';
import styles from './hero.module.scss'



const Hero = () => (
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
      <Scene/>
      <div className={styles.textHolder}>
        <h1 className={styles.titleStyle}>
          <span>award-</span><br/>
          <span className={styles.noShow}>winning</span><br/>
          <span>human</span>
        </h1>
      </div>
    </div>
  </div>
)

export default Hero;





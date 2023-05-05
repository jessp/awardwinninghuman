import Scene from './scene';
import Flare from './flare';
import styles from './hero.module.scss'

type Props = {
  isWork: boolean
  setWork: (arg0: boolean) => void
}


const Hero = ({ isWork, setWork }: Props) => (
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
        <div className={`work abs ${styles.hideOnBig}`} style={{ top: 'calc(100% + 1pt)', left : "-1.25pt", transform: "translateY(-100%)"}}>
          <button 
            className={isWork ? "active" : ""}
            onClick={() => setWork(true)}
            >
            work
          </button>
        </div>
        <div className={`play abs ${styles.hideOnBig}`} style={{ top: 'calc(100% + 1pt)', right : "-1.25pt", transform: "translateY(-100%)"}}>
            <button 
                className={isWork ? "" : "active"}
                onClick={() => setWork(false)}
                >
                play
            </button>
        </div>
        <div className={styles.flareHolder} style={{ top: '0px', left : "0px", transform: "translate(calc(-50% - 0.75pt), calc(-50% + 0.75pt))" }}>
          <Flare fill={isWork ? "#000" : "#fff"}/>
        </div>
        <div className={styles.flareHolder} style={{ top: '0px', left : "100%", transform: "translate(calc(-50% + 0.75pt), calc(-50% + 0.75pt))" }}>
          <Flare fill={!isWork ? "#000" : "#fff"}/>
        </div>
        <div className={`${styles.flareHolder} ${styles.hideOnSmall}`} style={{ top: '100%', left : "0px", transform: "translate(calc(-50% - 0.75pt), calc(-50% + 1.5pt))" }}>
          <Flare fill={isWork ? "#000" : "#fff"}/>
        </div>
        <div className={`${styles.flareHolder} ${styles.hideOnSmall}`} style={{ top: '100%', left : "100%", transform: "translate(calc(-50% + 0.75pt), calc(-50% + 1.5pt))" }}>
          <Flare fill={!isWork ? "#000" : "#fff"}/>
        </div>

      </div>
    </div>
  </div>
)

export default Hero;





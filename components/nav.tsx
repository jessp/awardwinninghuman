import styles from './nav.module.scss'

type Props = {
    scrolled: boolean
}


const Nav = ({ scrolled }: Props) => {
      return (
    <div className={`${styles.nav} ${scrolled ? styles.greenBackground : ""}`}>
        <div className={"container"}>
            <div className={`innerContainer ${styles.buttons}`}>
    	       <div className={"work"}>
                    <button>Work</button>
                </div>
                <div className={"play"}>
                    <button>Play</button>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Nav
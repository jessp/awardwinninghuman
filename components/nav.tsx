import styles from './nav.module.scss'

type Props = {
    scrolled: boolean,
    isWork: boolean, 
    setWork: (arg0: boolean) => void
}


const Nav = ({ scrolled, isWork, setWork }: Props) => {
      return (
    <div className={`${styles.nav} ${scrolled ? styles.greenBackground : ""}`}>
        <div className={"container"}>
            <div className={`innerContainer ${styles.buttons}`}>
    	       <div className={"work"}>
                    <button 
                        className={isWork ? styles.active : ""}
                        onClick={() => setWork(true)}
                        >
                        work
                    </button>
                </div>
                <div className={"play"}>
                    <button 
                        className={isWork ? "" : styles.active}
                        onClick={() => setWork(false)}
                        >
                        play
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Nav
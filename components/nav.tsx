import { MouseEvent as rMouseEvent } from 'react';
import styles from './nav.module.scss'

type Props = {
    scrolled: boolean,
    isWork: boolean, 
    setWork: (arg0: boolean) => void,
    scrollToProj: (e: rMouseEvent<HTMLButtonElement, MouseEvent>) => void
}


const Nav = ({ scrolled, isWork, setWork, scrollToProj }: Props) => {
      return (
    <div className={`${styles.nav} ${scrolled ? styles.greenBackground : ""}`}>
        <div className={"container"}>
            <div className={`innerContainer ${styles.buttons}`}>
    	       <div className={"work"}>
                    <button 
                        className={isWork ? "navButton active" : "navButton"}
                        onClick={(e) => { setWork(true); if (scrolled){ scrollToProj(e);}}}
                        >
                        work
                    </button>
                </div>
                <div className={"play"}>
                    <button 
                        className={isWork ? "navButton" : "navButton active"}
                        onClick={(e) => { setWork(false); if (scrolled){ scrollToProj(e);}}}
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
import { MouseEvent as rMouseEvent } from 'react';
import Flare from './flare'
import styles from './nav.module.scss';

type Props = {
    scrolled: boolean,
    isWork: boolean, 
    setWork: (arg0: boolean) => void,
    scrollToProj: (e: rMouseEvent<HTMLButtonElement, MouseEvent>) => void
}


const Nav = ({ scrolled, isWork, setWork, scrollToProj }: Props) => {
      return (
    <div>
        <div className={"container"}>
            <div className={`innerContainer ${styles.buttons}`}>
                <div>
                    <Flare fill={"#000"}/>
                </div>
    	       <div>
                    <button 
                        className={isWork ? `navButton ${styles.active}` : "navButton"}
                        onClick={(e) => { setWork(true); if (scrolled){ scrollToProj(e);}}}
                        >
                        Work History
                    </button>
                </div>
                <div>
                    <button 
                        className={isWork ? "navButton" : `navButton ${styles.active}`}
                        onClick={(e) => { setWork(false); if (scrolled){ scrollToProj(e);}}}
                        >
                        Personal Projects
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Nav
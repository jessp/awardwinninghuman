import React from 'react'
import Scene from '../components/scene'
import styles from './header.module.scss'



const Header = () => (
    <div className={styles.heroStarter}>
    	<div className={`${styles.titleHolder} ${styles.backText}`}>
	    	<h1>
		    	<span>A<span className={styles.contrastText}>wa</span>r<wbr /><span className={styles.contrastText}>d</span>-</span><br/>
		    	<span><span className={styles.contrastText}>w</span>in<span className={styles.contrastText}>ni</span><wbr />ng</span><br/>
		    	<span><span className={styles.contrastText}>H</span>um<wbr />a<span className={styles.contrastText}>n</span></span>
	    	</h1>
	    </div>
	    <div className={`${styles.titleHolder} ${styles.frontText}`}>
	    	<h1>
	    		<span>Awar<wbr />d-</span><br/>
	    		<span>winni<wbr />ng</span><br/>
	    		<span>Hum<wbr />an</span>
	    	</h1>
	    </div>
	    <Scene isWork={true}></Scene>
    </div>
)

export default Header
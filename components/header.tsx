import React from 'react'
import Scene from '../components/scene'
import styles from './header.module.scss'



const Header = () => (
    <div className={styles.heroStarter}>
    	<div className={`${styles.titleHolder} ${styles.backText}`}>
    		<img
    		className={"hideOnSmall"}
			src={"/big_back_vector.svg"}
			alt=""
			/>
			<img
			className={"hideOnMed"}
			src={"/small_back_vector.svg"}
			alt=""
			/>
	    </div>
	    <div className={`${styles.titleHolder} ${styles.frontText}`}>
	    	<img
	    	className={"hideOnSmall"}
			src={"/big_front_vector.svg"}
			alt=""
			/>
			<img
			className={"hideOnMed"}
			src={"/small_front_vector.svg"}
			alt=""
			/>
	    </div>
	    <div className={styles.sceneHolder}>
	    	<Scene></Scene>
	    </div>
    </div>
)

export default Header
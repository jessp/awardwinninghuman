import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Scene from '../components/scene'
import styles from './header.module.scss'



const Header = () => (
    	<MouseParallaxContainer 
    		globalFactorX={0.05} 
    		globalFactorY={0.05} 
    		className={styles.heroStarter}>
	    	<MouseParallaxChild factorX={0.3} factorY={0.1} className={`${styles.titleHolder}`}>
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
			</MouseParallaxChild>
			<MouseParallaxChild factorX={0.25} factorY={0.25} className={`${styles.titleHolder} ${styles.frontText}`}>
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
		    </MouseParallaxChild>
		    <div className={styles.sceneHolder}>
		    	<Scene></Scene>
		    </div>
		</MouseParallaxContainer>
)

export default Header

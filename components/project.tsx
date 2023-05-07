import Image from 'next/image';
import { ReactNode } from "react";
import Carousel from './carousel';
import Flare from './flare';
import styles from './project.module.scss';

type Props = {
	title: string,
	images: [string], 
	years: [number | string],
	link: {"display": string, "address": string},
	alt: string,
	children: ReactNode,
	last: boolean | undefined
}

const Project = ({ title, images, years, link, alt, children, last }: Props) => (
    <div className={styles.projHolder}>
    	<div className={styles.projHeader}>
    		<h3>{title}</h3>
    	</div>
    	<div className={styles.projBody}>
	    	<p className={styles.linkHolder}>
		    	<span className={"caption"}>{years.length < 2 ? `${years[0]}` : `${years[0]} - ${years[1]}`}</span>
		    	<span>&#x2022;</span>
		    	<a href={link.address} target="_blank">{link.display}</a>
	    	</p>
	    	<div className={styles.projContent}>
	    		<Carousel slides={images}/>
	    		<div className={styles.bodyInfo}>
	    			{children}
	    		</div>
	    	</div>
	    </div>
	    <div className={`hideOnBig ${styles.flare}`}>
	    	<Flare fill={last ? "#000" : "#DAFF70"}/>
	    </div>
    </div>
)

export default Project
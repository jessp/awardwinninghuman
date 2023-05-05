import Image from 'next/image';
import { ReactNode } from "react";
import Carousel from './carousel';
import styles from './project.module.scss';

type Props = {
	org: string,  
	title: string,
	images: [string], 
	years: [number]|[number, number],
	link: {"display": string, "address": string},
	alt: string,
	children: ReactNode
}

const Project = ({ org, title, images, years, link, alt, children }: Props) => (
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
	    		<div>
	    			{children}
	    		</div>
	    	</div>
	    </div>
    </div>
)

export default Project
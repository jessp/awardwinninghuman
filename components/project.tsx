import Image from 'next/image'
import Carousel from './carousel';
import styles from './project.module.scss'

type Props = {
	org: string,  
	title: string,
	info: string, 
	responsibilities: string,
	images: [string], 
	years: [number]|[number, number],
	link: {"display": string, "address": string},
	alt: string
}

const Project = ({ org, title, info, responsibilities, images, years, link, alt }: Props) => (
    <div className={styles.projHolder}>
    	<div className={styles.projHeader}>
    		<h3>{title}</h3>
    	</div>
    	<div className={styles.projBody}>
	    	<p>Years</p>
	    	<div className={styles.projContent}>
	    		<Carousel slides={images}/>
	    		<p>{info}</p>
	    	</div>
	    </div>
    </div>
)

export default Project
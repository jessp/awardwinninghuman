import Image from 'next/image'
import styles from './project.module.scss'

type Props = {
	org: string,  
	title: string,
	info: string, 
	responsibilities: string,
	image: string, 
	years: [number]|[number, number],
	link: {"display": string, "address": string},
	alt: string
}

const Project = ({ org, title, info, responsibilities, image, years, link, alt }: Props) => (
    <>
    	<div className={styles.projectGrid}>
    		<div className={styles.projectYear}>
    			<h2>{years[0]}<br/>{years.length === 1 || `- ${years[1]}`}</h2>
    		</div>
    		<div className={styles.projectHeader}>
    			<h3>{title}</h3>
    			<h4>{org}</h4>
    			<p>
    				<a href={link.address} rel="noreferrer" target="_blank">{link.display}</a>
    			</p>
    		</div>
    		<div className={styles.imgHolder}>
     			<Image src={image} alt={alt} layout='fill' objectFit='cover' />
    		</div>
	     	<div className={styles.description}>
		    	<p>{info}</p>
		    </div>
		    <div className={styles.label}>
		    	<p className={styles.responsibilities}>I did:</p>
		    </div>
		    <div className={styles.resp}>
		    	<p className={styles.responsibilities}>
		    		<span className={styles.responsibilities + " " + styles.hideOnBig} style={{"fontWeight": "bold"}}>I did: </span>
		    		{responsibilities}
		    	</p>
		    </div>
    	</div>
    </>
)

export default Project
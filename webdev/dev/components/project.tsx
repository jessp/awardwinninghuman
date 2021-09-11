import styles from './project.module.scss'

type Props = {
	org: string,  
	title: string,
	info: string, 
	responsibilities: string,
	image: string, 
	years: [number]|[number, number]
}

const Project = ({ org, title, info, responsibilities, image, years }: Props) => (
    <>
    	<div className={styles.projectGrid}>
    		<div>
    			<h2>{years[0]}<br/>{years.length === 1 || `- ${years[1]}`}</h2>
    		</div>
    		<div>
    			<h3>{title}</h3>
    			<h4>{org}</h4>
    		</div>
    		<div className={styles.arrowDown}>
    		</div>
    		<div className={styles.imgHolder}>
    			<img src={image}
     				 alt="MDN logo"/>
     			<div>
     				<div></div>
	     			<div className={styles.label}>
	     				<p className={styles.responsibilities}>I did:</p>
	     			</div>
	     			<div>
		    			<p>{info}</p>
		    		</div>
		    		<div>
		    			<p className={styles.responsibilities}>{responsibilities}</p>
		    		</div>
		    	</div>
    		</div>

    	</div>
    </>
)

export default Project
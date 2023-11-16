import Image from 'next/image';
import { ReactNode } from "react";
import Carousel from './carousel';
import Flare from './flare';
import styles from './project.module.scss';
import carStyles from './carousel.module.scss'


type Props = {
	title: string,
	images: (string)[], 
	years: (string|number)[],
	link: {"display": string, "address": string},
	alt: (string)[],
	children: ReactNode,
	role: string | undefined
}

const Project = ({ title, images, years, link, alt, role, children }: Props) => (
    <div className={styles.projHolder}>
    	<div className={styles.projHeader}>
    		<p className={`${styles.abs} ${styles.accentText} titleClone`}>{title}</p>
    		<p className={`${styles.abs} ${styles.accentText} titleClone`}>{title}</p>
    		<h3>{title}</h3>
    	</div>
    	<div className={styles.projBody}>
	    	<div className={styles.projContent}>
	    		{images.length > 1 &&
	    			<Carousel slides={images} alt={alt}/>
	    		}
	    		{images.length === 1 &&
	    			<div className={carStyles.embla}>
				      <div className={carStyles.embla__viewport}>
				        <div className={carStyles.embla__container}>
				            <div className={carStyles.embla__slide}>
				              <img
				                className={carStyles.embla__slide__img}
				                src={images[0]}
				                alt={alt[0]}
				              />
				            </div>
				        </div>
				       </div>
				      </div>
	    		}
	    		<div className={styles.bodyInfo}>
	    			<ul className={styles.linkHolder}>
	    				{role &&
	    					<li>
				 				<span className={"bold"}>{`${role}`}</span>
				 			</li>
	    				}
				 		<li>
				 			<span className={"bold"}>{years.length < 2 ? `${years[0]}` : `${years[0]} - ${years[1]}`}</span>
				 		</li>
				    	<li>
				    		<a className={"bold"} href={link.address} target="_blank">{link.display}</a>
				    	</li>
			    	</ul>
	    			{children}
	    		</div>
	    	</div>
	    </div>
    </div>
)

export default Project
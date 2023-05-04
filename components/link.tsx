import styles from './link.module.scss'
import Flare from './flare';

type Props = {
	text: string,  
	url: string
}

const Link = ({ text, url }: Props) => (
    <li className={styles.linkStyled}>
    	<a href={url}>
	    	<Flare/>
	    	<span>{text}</span>
    	</a>
    </li>
)

export default Link
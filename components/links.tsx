import Link from './link';
import styles from './links.module.scss'


const Links = () => (
    <ul className={styles.linkList}>
    	<Link text={"GitHub"} url={"https://github.com/jessp"}/>
    	<Link text={"LinkedIn"} url={"https://www.linkedin.com/in/jess-peter-280108248/"}/>
    	<Link text={"Email"} url={"mailto:jess@awardwinninghuman.com?subject=I don't usually do this but..."}/>
    </ul>
)

export default Links
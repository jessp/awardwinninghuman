import { ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from './projectList.module.scss';



type Props = {
	children: ReactNode,
}

const ProjectList = ({ children }: Props) => {
	const [isVisible, changeVisible] = useState(true);

    return (
    	<CSSTransition
    		in={isVisible}
	        timeout={500}
	        classNames={"listTransition"}
	        unmountOnExit
	        appear
        >
			<div className={styles.projList}>
				{children}
			</div>
		</CSSTransition>
	)
};

export default ProjectList;



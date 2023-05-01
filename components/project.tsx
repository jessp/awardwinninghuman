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
    	<h3>Boop</h3>
    </>
)

export default Project
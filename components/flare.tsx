type Props = {
  fill?: `#${string}` | undefined
}

const Flare = ({ fill }: Props) => (
	<svg width="26" height="43" viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path 
			d="M22.6933 21.28C17.7067 22.8994 13.9403 27.1566 12.9997 32.3897C12.0577 27.1564 8.29043 22.8994 3.30301 21.28C8.27432 19.7511 12.0574 15.5525 12.9997 10.3594C13.9405 15.5523 17.7228 19.7511 22.6933 21.28Z" 
			fill={fill ? fill : "none"}
			stroke="black" 
			strokeWidth="1.25" 
			strokeMiterlimit="10"/>
	</svg>
)

export default Flare;
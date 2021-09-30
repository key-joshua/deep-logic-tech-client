export function Menucross(props) {
	return (
		<svg
			width='19'
			height='15'
			viewBox='0 0 19 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
            
            onClick={()=>props.handleOpenMenu(false)}
            
		>
			<path
				d='M0.481466 0.865128L18.4815 19.8651M18.4815 1.13487L0.481467 20.1349'
				stroke='black'
			/>
		</svg>
	);
}
export function Menubar(props) {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 38 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
            
            onClick={()=>props.handleOpenMenu(true)}
		>
			<line y1='0.5' x2='38' y2='0.5' stroke='black' />
			<line y1='19.5' x2='38' y2='19.5' stroke='black' />
			<line y1='9.5' x2='38' y2='9.5' stroke='black' />
		</svg>
	);
}

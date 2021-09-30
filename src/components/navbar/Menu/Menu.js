import React from 'react';

const Menu = (props) => {
	return (
		<div className='menu-content-container' style={{transform:`${props.menuData.transform}`}}>
			<div>
                <h5>SECTIONS</h5>
				<ul>
					<li>Home</li>
					<li>US.</li>
					<li>POlitics</li>
					<li>Health</li>
					<li>Business</li>
					<li>Personal Finance by NextAdvisor</li>
					<li>Tech</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;

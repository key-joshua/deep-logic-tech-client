import React, { useState } from 'react';
import Logo from '../Logo';
import Menu from './Menu/Menu';
import { Menucross, Menubar } from './Menu/Icons';

function Navbar() {
	const [menuData, setMenuData] = useState({
		transform: 'translateX(-100%)',
		status: false,
	});

	const handleOpenMenu = (slug) => {
		slug === true
			? setMenuData({ transform: 'translateX(0%)', status: true })
			: setMenuData({ transform: 'translateX(-100%)', status: false });
	};
	return (
		<div className='navbar-container'>
			<div>
				{menuData.status === false && (
					<Menubar handleOpenMenu={handleOpenMenu} />
				)}
				{menuData.status === true && (
					<Menucross handleOpenMenu={handleOpenMenu} />
				)}

				<Logo />
			</div>

			<ul>
				<h4>AMERICAN MUST CHANGE</h4>
				<li>RACISM AND COVID-19</li>
				<li>INEQUALITY</li>
				<li>BLACK,DISABLED AND AT RISK</li>
				<li>
					<i class='fab fa-telegram'></i> NEWSLETTER
				</li>
			</ul>
			<div>
				<i class='fas fa-search'></i>
			</div>
			<Menu handleOpenMenu={handleOpenMenu} menuData={menuData} />
		</div>
	);
}

export default Navbar;

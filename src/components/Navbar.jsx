import React from 'react';
import { NavLink } from 'react-router-dom';
import './compStyles/Navbar.css';

const Navbar = () => {
	return (
		<header className='nav'>
			<nav>
				<ul className='navHome'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>

					<li id='logo'>
						<NavLink to='/'>
							<img id='logo' src={'./images/smarT.png'} alt='Tyson Unce'></img>
						</NavLink>
					</li>

					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>

					<li>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
				</ul>
				<NavLink to='/'>
					<img id='logo2' src={'./images/smarT.png'} alt='Tyson Unce'></img>
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;

import React from 'react';
import './compStyles/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div className='main-content'>
				<div className='left box'>
					<h2>About us</h2>
					<div className='content'>
						<p>
							CodinNepal is a YouTube channel where you can learn web designing,
							web development, ui/ux designing, html css tutorial, hover
							animation and effects, javascript and jquery tutorial and related
							so on.
						</p>
						<br />
						<br />
						<div className='socialSpacing'>
							<div className='padding'></div>
							<div className='social'>
								<ul>
									<li>
										<a href='facebook.com'>
											<img src={'./images/facebookLogo.png'} />
										</a>
									</li>
									<li>
										<a href='twitter.com'>
											<img src={'./images/twitterLogo.png'} />
										</a>
									</li>
									<li>
										<a href='instagram.com'>
											<img src={'./images/instagramLogo.png'} />
										</a>
									</li>
									<li>
										<a href='linkedin.com/tysonunce'>
											<img src={'./images/linkedInLogo.png'} />
										</a>
									</li>
									<li>
										<a href='tiktok.com'>
											<img src={'./images/tikTokLogo.png'} />
										</a>
									</li>
								</ul>
							</div>
							<div className='padding'></div>
						</div>
					</div>
				</div>
				<div className='center box'>
					<h2>Address</h2>
					<div className='content'>
						<div className='place'>
							<span className='fas fa-map-marker-alt'></span>
							<span className='text'>Austin, Texas</span>
						</div>
						<div className='phone'>
							<span className='fas fa-phone-alt'></span>
							<span className='text'>+777-7777</span>
						</div>
						<div className='email'>
							<span className='fas fa-envelope'></span>
							<span className='text'>smarT.com</span>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<center>
					<span className='credit'>Created By Tyson Unce | </span>
					<span className='far fa-copyright'></span>
					<span> 2022 All rights reserved.</span>
				</center>
			</div>
		</footer>
	);
};

export default Footer;

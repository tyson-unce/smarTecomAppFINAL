import React from 'react';
import './compStyles/AppComponent.css';
import { NavLink } from 'react-router-dom';

const AppComponent = () => {
	return (
		<>
			<div className='wrapper'>
				<div className='slogan'>smarT products</div>
				<section id='slider'>
					<figure>
						<img
							src=''
							height='400'
							width='300'
							alt='Customer Vinyl Shopping'
						/>
						<img
							src='images/Vinyl_Shopper6.webp'
							height='400'
							width='300'
							alt='Customer Vinyl Shopping2'
						/>
						<img
							src='images/Vinyl_Shopper4.jpeg'
							height='400'
							width='300'
							alt='Customer Vinyl Shopping3'
						/>
						<img
							src='images/Vinyl_Shopper5.webp'
							height='400'
							width='300'
							alt='Customer Vinyl Shopping4'
						/>
						<img
							src=''
							height='400'
							width='300'
							alt='Customer Vinyl Shopping'
						/>
					</figure>
				</section>
				<div className='slogan'>dumb prices</div>
			</div>
			<div className='homeCards'>
				<div className='padding'></div>
				<img
					id='ownerPhoto'
					src={'./images/tysonUnce.jpeg'}
					alt='Tyson Unce'
				></img>

				<aside>
					<h2>The man behind the vision</h2>Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Dolorum molestiae maxime voluptatibus
					nemo necessitatibus praesentium officia illum minus repellat corrupti
					similique sunt autem quidem, quia amet aliquid suscipit error earum!
				</aside>
				<div className='padding'></div>
			</div>
			<section className='productButton'>
				<NavLink to='/products'>
					<button id='homeButton'>See our products</button>
				</NavLink>
			</section>
		</>
	);
};

export default AppComponent;

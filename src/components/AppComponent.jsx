import React from 'react';
import './compStyles/AppComponent.css';
import { NavLink } from 'react-router-dom';

const AppComponent = () => {
	return (
		<>
			<div className='wrapper'>
				<div className='slogan'></div>
				<section id='slider'>
					<figure>
						<img
							src={'./images/slide4.png'}
							height='400'
							width='300'
							alt='slider image'
						/>
						<img
							src={'./images/slide2.png'}
							height='400'
							width='300'
							alt='slider image'
						/>
						<img
							src='images/slide3.png'
							height='400'
							width='300'
							alt='slider image'
						/>
						<img
							src={'./images/slide1.png'}
							height='400'
							width='300'
							alt='slider image'
						/>
						<img
							src={'./images/slide4.png'}
							height='400'
							width='300'
							alt='slider image'
						/>
					</figure>
				</section>
				<div className='slogan'></div>
			</div>
			<div className='homeCards'>
				<div className='padding'></div>
				<img
					id='ownerPhoto'
					src={'https://i.postimg.cc/QMjy0bKv/tyson-Unce.jpg'}
					alt='Tyson Unce'
				></img>

				<aside>
					<h2>The man behind the vision</h2>One day, our CEO Tyson Unce was
					wondering why he had to go to so many different sites to get the
					latest new smart tech. And through this question he realized if he
					built a site that made it accesible to everyone, then anybody could
					enjoy our ever-evolving smart-world.
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

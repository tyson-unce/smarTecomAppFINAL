import React, { useEffect, useState } from 'react';
import './compStyles/Products.css';
import Axios from 'axios';

const Products = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const [products, showProducts] = useState([]);

	useEffect(() => {
		Axios.get('https://smartecombackend.herokuapp.com/getProducts').then(
			(response) => {
				showProducts(response.data);
			}
		);
	}, []);

	const getLowProd = () => {
		Axios.get(
			'https://smartecombackend.herokuapp.com/getProductsPriceLow'
		).then((response) => {
			showProducts(response.data);
		});
	};

	const getHighProd = () => {
		Axios.get(
			'https://smartecombackend.herokuapp.com/getProductsPriceHigh'
		).then((response) => {
			showProducts(response.data);
		});
	};

	const getCategory = () => {
		Axios.get('https://smartecombackend.herokuapp.com/getProducts').then(
			(response) => {
				showProducts(response.data);
			}
		);
	};

	const onChange = (e) => {
		if (e.target.value === 'High') {
			{
				getHighProd();
			}
		}
		if (e.target.value === 'Low') {
			{
				getLowProd();
			}
		}
		if (e.target.value === 'Category') {
			{
				getCategory();
			}
		}
	};
	return (
		<div className='prodBod'>
			<h1>Our Products</h1>
			<h5>(Don't want to look for it? We hear you.)</h5>

			<div className='searchBar'>
				<form>
					<div className='padding'></div>
					<div>
						<input
							className='searchButton'
							type='button'
							name='search'
							value='search'
						/>
						<input
							className='actualSearchBar'
							type='search'
							name='search bar'
							placeholder='ex. smarT TV'
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}
						/>
					</div>
					<div id='dropDown'>
						<label for='cars'>Sort By: </label>

						<select name='filters' onChange={onChange}>
							<option value='null'>Select</option>
							<option value='High'>Price: High to Low</option>
							<option value='Low'>Price: Low to High</option>
							<option value='Category'>Category</option>
						</select>
					</div>
				</form>
			</div>

			<div className='productInfo'>
				{products
					.filter((val) => {
						if (searchTerm === '') {
							return val;
						} else if (
							val.name.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return val;
						}
					})
					.map((val) => {
						return (
							<div>
								{/* <h5>{val.name}</h5> */}
								<button>Add to cart</button>
								<br />
								<br />
								<img src={val.image} alt='product' />
								<br />
								<h5>{val.name}</h5>
								{/* <p className='price'>${val.price}</p> */}
								{/* <button>Add to cart</button> */}
								<p>{val.descrip}</p>
								<p className='price'>${val.price}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Products;

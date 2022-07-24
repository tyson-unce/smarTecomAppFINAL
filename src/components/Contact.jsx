import React, { useState, useEffect } from 'react';
import './compStyles/Contact.css';

const Contact = () => {
	const initialValues = { email: '', feedback: '', name: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = 'a valid email address is required';
		} else if (!regex.test(values.email)) {
			errors.email = 'please input correct email address format';
		}
		if (!values.feedback) {
			errors.feedback = 'a message is required';
		}
		if (!values.name) {
			errors.name = 'please input a name';
		}
		return errors;
	};

	return (
		<div className='contactForm'>
			<h1 id='conH1'>Enjoyed the smarT&#8482; experience? Let us know here.</h1>
			<section className='conFormPro'>
				<div className='padding'></div>
				<form className='conForm' onSubmit={handleSubmit}>
					<section class='form1'>
						<label>Preffered Name:</label>
						<br />
						<input
							type='name'
							name='name'
							placeholder='name'
							value={formValues.name}
							onChange={handleChange}
						/>
						<p>{formErrors.name}</p>
					</section>
					<section class='form1'>
						<label>Email:</label>
						<br />
						<input
							type='email'
							name='email'
							placeholder='name@email.com'
							value={formValues.email}
							onChange={handleChange}
						/>
						<p>{formErrors.email}</p>
					</section>

					<br />

					<section className='form2'>
						<label>Comments:</label>
						<br />
						<textarea
							name='feedback'
							id=''
							cols='60'
							rows='5'
							placeholder='Let us know :)'
							value={formValues.message}
							onChange={handleChange}
						></textarea>
						<p>{formErrors.feedback}</p>
					</section>
					<br />
					<section className='buttonSub'>
						<div className='padding'></div>
						<input type='submit' name='submit' value='Submit' />
						<div className='padding'></div>
					</section>
					{Object.keys(formErrors).length === 0 && isSubmit ? (
						<div className='uiMessage'>Thank you for your feedback!</div>
					) : (
						''
					)}
				</form>
				<div className='padding'></div>
			</section>
		</div>
	);
};

export default Contact;

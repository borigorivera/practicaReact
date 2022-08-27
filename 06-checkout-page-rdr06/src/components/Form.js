import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		phone: "",
		name: "",
		address: "",
		city: "",
		country: "",
		postalcode: "",
		checked: false,
	});

	const handleChange = (e) => {
		setFormValues((value) => {
			if (e.target.name === "checked")
				return { ...value, [e.target.name]: e.target.checked };
			return { ...value, [e.target.name]: e.target.value };
		});
	};
	return (
		<form className={styles.wrapper}>
			<h2 className={styles.title}>Contact information</h2>
			<label className={styles.label} htmlFor="email">
				E-mail
			</label>
			<input
				placeholder="Enter your email..."
				className={styles.input}
				type="email"
				id="email"
				name="email"
				onChange={handleChange}
				value={formValues.email}
			/>
			<label className={styles.label} htmlFor="phone">
				Phone
			</label>
			<input
				placeholder="Enter your phone..."
				className={styles.input}
				type="tel"
				id="phone"
				name="phone"
				onChange={handleChange}
				value={formValues.phone}
			/>
			<h2 className={styles.title}>Shipping address</h2>
			<label className={styles.label} htmlFor="name">
				Full name
			</label>
			<input
				placeholder="Your full name..."
				className={styles.input}
				type="text"
				id="name"
				name="name"
				onChange={handleChange}
				value={formValues.name}
			/>
			<label className={styles.label} htmlFor="address">
				Address
			</label>
			<input
				placeholder="Your address..."
				className={styles.input}
				type="text"
				id="address"
				name="address"
				onChange={handleChange}
				value={formValues.address}
			/>
			<label className={styles.label} htmlFor="city">
				City
			</label>
			<input
				placeholder="Your city..."
				className={styles.input}
				type="text"
				id="city"
				name="city"
				onChange={handleChange}
				value={formValues.city}
			/>
			<div className={styles.container}>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="country">
						Country
					</label>
					<select
						className={styles.input}
						name="country"
						id="country"
						value={formValues.country}
						onChange={handleChange}
					>
						<option className={styles.option} value="">
							Your country...
						</option>
						<option className={styles.option} value="mexico">
							Mexico
						</option>
						<option className={styles.option} value="usa">
							USA
						</option>
						<option className={styles.option} value="canada">
							Canada
						</option>
					</select>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="postalcode">
						Postal code
					</label>
					<input
						placeholder="Your postal code..."
						className={styles.input}
						type="text"
						id="postalcode"
						name="postalcode"
						onChange={handleChange}
						value={formValues.postalcode}
					/>
				</div>
			</div>

			<div className={styles.confirmationContainer}>
				<input
					className={styles.confirmationInput}
					type="checkbox"
					id="checked"
					name="checked"
					checked={formValues.checked}
					onChange={handleChange}
				/>
				<label className={styles.confirmationLabel} htmlFor="checked">
					Save this information for next time
				</label>
			</div>
			<button className={styles.button}>Continue</button>
		</form>
	);
};

export default Form;

import React, { useState } from "react";
import "./form.css";

const Form = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpirationDate, setCardExpirationDate] = useState("");
	const [cardCvv, setCardCvv] = useState("");

	const [messageDisplay, setMessageDisplay] = useState("");

	const form = function (e) {
		e.preventDefault();

		setTimeout(() => {
			setName("");
			setAge("");
			setEmail("");
			setCardNumber("");
			setCardExpirationDate("");
			setCardCvv("");

			handleMessage();
		}, 2000);
	};

	const handleSubmit = function () {
		setTimeout(() => {
			setName("");
			setAge("");
			setEmail("");
			setCardNumber("");
			setCardExpirationDate("");
			setCardCvv("");

			handleMessage();
		}, 2000);
	};

	const handleMessage = function () {
		if (name === "") {
			setMessageDisplay(
				<>
					<p style={{ color: "red" }}>Please enter a valid information</p>
				</>
			);
		} else {
			setMessageDisplay(
				<>
					<p style={{ color: "green" }}>
						A receipt as been sent to your email. Make sure to print it and
						bring it along on your start day. Thank you ☺.
					</p>
				</>
			);
		}

		setTimeout(() => {
			setMessageDisplay("");
		}, 5000);
	};

	return (
		<div className="d4l__form section__padding">
			<h1>
				Register with us and become a professional dancer within 6 months of
				learning. Make payment and begin your dance class a day after payment.
			</h1>

			<div className="d4l__form-danceprice_container">
				<div className="price_container">
					<h3>Salsa Dance & Ballroom Dance</h3>
					<p>Start learning at just </p>
					<p>
						$150 <span>$200</span>
					</p>
					<a href="#form">Proceed to registration</a>
				</div>
				<div className="price_container">
					<h3>HipHop Dance & Line dance</h3>
					<p>Start learning at just </p>
					<p>
						$150 <span>$200</span>
					</p>
					<a href="#form">Proceed to registration</a>
				</div>
			</div>

			<div className="d4l__form-container">
				<div className="d4l__form-payment">
					<form onSubmit={form} id="form">
						<input
							type="text"
							placeholder="Fullname"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="number"
							placeholder="Age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="number"
							placeholder="Card Number"
							value={cardNumber}
							onChange={(e) => setCardNumber(e.target.value)}
						/>
						<div className="cvv">
							<input
								type="number"
								placeholder="MM/YY"
								value={cardExpirationDate}
								onChange={(e) => setCardExpirationDate(e.target.value)}
							/>
							<input
								type="number"
								placeholder="CVV"
								value={cardCvv}
								onChange={(e) => setCardCvv(e.target.value)}
							/>
						</div>
						{messageDisplay}
						<button onClick={handleSubmit}>REGISTER</button>
					</form>
				</div>

				<div className="d4l__form-image"></div>
			</div>
		</div>
	);
};

export default Form;

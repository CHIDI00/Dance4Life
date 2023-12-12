import React, { useState } from "react";
import danceEvent1 from "../../assets/danceEvent1.jpg";
import event from "../../assets/event.jpg";
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
		if (
			name === "" ||
			age === "" ||
			!email.includes("@gmail.com") ||
			email === "" ||
			cardNumber === "" ||
			cardExpirationDate === "" ||
			cardCvv === ""
		) {
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
						bring it along on your start day. Thank you 😉.
					</p>
				</>
			);
		}

		setTimeout(() => {
			setMessageDisplay("");
		}, 10000);
	};

	return (
		<div className="d4l__form section__padding" id="form">
			<h1>
				Register with us and become a professional dancer within 6 months of
				learning. Make payment and begin your dance class a day after payment.
			</h1>

			<div className="d4l__form-danceprice_container">
				<div className="price_container">
					<h3>Salsa Dance & Ballroom Dance</h3>
					<p>Start learning at just </p>
					<p>
						$150 <span>$190</span>
					</p>
					<a href="#form">Proceed to registration</a>
				</div>
				<div className="price_container">
					<h3>HipHop Dance & Line dance</h3>
					<p>Start learning at just </p>
					<p>
						$210 <span>$250</span>
					</p>
					<a href="#form">Proceed to registration</a>
				</div>
			</div>

			<div className="d4l__form-container" id="form">
				<div className="d4l__form-payment">
					<form onSubmit={form}>
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

			<TrackEvent />
		</div>
	);
};

const TrackEvent = () => {
	return (
		<div className="d4l__trackEvent" id="event">
			<h1>
				KEEP TRACK OF OUR AMAIZING <br /> UPCOMING EVENT
			</h1>
			<div className="trackEvent">
				<div className="d4l__trackEvent-container">
					<div
						className="image-container"
						style={{ backgroundImage: `url('${danceEvent1}')` }}
					>
						<div className="event-date">
							<h3>16</h3>
							<p>DEC</p>
						</div>
					</div>

					<p className="eventName">Brooklyn Dance Performance</p>
				</div>
				<div className="d4l__trackEvent-container">
					<div
						className="image-container"
						style={{ backgroundImage: `url('${event}')` }}
					>
						<div className="event-date">
							<h3>07</h3>
							<p>MAY</p>
						</div>
					</div>

					<p className="eventName">Ukyuko university group dance</p>
				</div>
			</div>
		</div>
	);
};

export default Form;

import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./ticket.css";
import SuccessfulMessage from "../successMessage/SuccessfulMessage";

const Ticket = ({ setToggleTicket, setToggleTicket2 }) => {
	const [cardNumber, setCardNumber] = useState();
	const [mmyy, setMMYY] = useState();
	const [cvv, setCvv] = useState("");
	const [email, setEmail] = useState("");

	const [success, setSuccess] = useState();

	function handleForm(e) {
		e.preventDefault();

		setTimeout(() => {
			setCardNumber("");
			setMMYY("");
			setCvv("");
			setEmail("");

			handleMessage();
		}, 1500);
	}

	function handleSubmit() {
		setTimeout(() => {
			setCardNumber("");
			setMMYY("");
			setCvv("");
			setEmail("");

			handleMessage();
		}, 1500);
	}

	function handleMessage() {
		if (
			cardNumber === "" ||
			mmyy === "" ||
			cvv === "" ||
			email === "" ||
			!email.includes("@gmail.com")
		) {
			setSuccess(<p>Please fill in the correct details.</p>);
		} else {
			setSuccess(
				<SuccessfulMessage>
					<h4>Payment successfull. See you at the event 😉.</h4>
				</SuccessfulMessage>
			);
		}
	}

	function handleCloseBtn() {
		setToggleTicket(false);
	}

	return (
		<div className="d4l__ticket">
			<RiCloseLine
				size={30}
				style={{
					position: "absolute",
					top: "20px",
					right: "10px",
					cursor: "pointer",
					padding: "2px",
					background: "#fff",
					borderRadius: "50px",
				}}
				onClick={() => handleCloseBtn()}
			/>
			<div className="d4l__ticket-container">
				{handleMessage ? (
					<div className="d4l__ticket-payment">
						<h3>Payment</h3>
						<form className="ticket_form" onSubmit={handleForm}>
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
									value={mmyy}
									onChange={(e) => setMMYY(e.target.value)}
								/>
								<input
									type="number"
									placeholder="CVV"
									value={cvv}
									onChange={(e) => setCvv(e.target.value)}
								/>
							</div>
							<select>
								<option value="$200 / person">$200 / person</option>
								<option value="$280 for 2">$280 for 2</option>
							</select>
							<input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{success}
							<button className="pay-btn" onClick={handleSubmit}>
								Buy Ticket
							</button>
						</form>
					</div>
				) : (
					{ success }
				)}

				<div className="d4l__ticket-image"></div>
			</div>
		</div>
	);
};

export default Ticket;

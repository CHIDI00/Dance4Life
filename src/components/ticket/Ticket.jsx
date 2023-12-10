import React from "react";
import "./ticket.css";

const Ticket = () => {
	return (
		<div className="d4l__ticket">
			<div className="d4l__ticket-container">
				<div className="d4l__ticket-payment">
					<h3>Payment</h3>
					<form>
						<input type="number" placeholder="Card Number" />
						<div className="cvv">
							<input type="number" placeholder="MM/YY" />
							<input type="number" placeholder="CVV" />
						</div>
						<input type="email" placeholder="Email" />
						<button>PAY</button>
					</form>
				</div>

				<div className="d4l__ticket-image"></div>
			</div>
		</div>
	);
};

export default Ticket;

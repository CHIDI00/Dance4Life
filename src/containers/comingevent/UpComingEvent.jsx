import React, { useEffect, useState } from "react";
import { RiTicket2Fill } from "react-icons/ri";
import "./upcomingevent.css";

const UpComingEvent = () => {
	const [countDown, setCountDown] = useState(345600);

	useEffect(function () {
		const timeInterval = setInterval(() => {
			setCountDown((countDownTime) => countDownTime - 1);
		}, 1000);

		return () => clearInterval(timeInterval);
	}, []);

	const days = Math.floor(countDown / 86400);
	const hours = Math.floor((countDown % 86400) / 3600);
	const minutes = Math.floor((countDown % 3600) / 60);
	const seconds = (countDown % 3600) % 60;

	return (
		<div className="d4l__upcomingevent section__padding">
			<h1>COUNT EVERY SECONDS UNTIL THE EVENT COMING UP</h1>
			<div className="d4l__upcomingevent-eventTime_container">
				{hours !== 0 ? (
					<>
						{" "}
						<div className="event eventTime_day">
							<h1>{days < 10 ? `0${days}` : days}</h1>
							<p>DAYS</p>
						</div>
						<div className="event eventTime_hour">
							<h1>{hours < 10 ? `0${hours}` : hours}</h1>
							<p>HOURS</p>
						</div>
						<div className="event eventTime_min">
							<h1>{minutes < 10 ? `0${minutes}` : minutes}</h1>
							<p>MINUTES</p>
						</div>
						<div className="event eventTime_sec">
							<h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
							<p>SECONDS</p>
						</div>
					</>
				) : (
					<h1>Ticket sale Closed</h1>
				)}
			</div>

			<div className="d4l__upcomingevent-getTicket">
				<p>Get ticket t access the event</p>
				<button disabled={hours === 0 ? "true" : "false"}>
					Get Ticket <RiTicket2Fill />
				</button>
			</div>

			{/* <div className="d4l__upcomingevent-ticket_payment">
				<div className="d4l__upcomingevent-form">
					<input type="email" placeholder="Enter email" />
					<input type="number" placeholder="Card Number" />
					<div className="form-cvv">
						<input type="text" placeholder="MM/YY" />
						<input type="text" placeholder="CVV" />
					</div>
					<select>
						<option value="$79.99 / person">$79.99 / person</option>
						<option value="$120 for 2 persons">$120 for 2 persons</option>
					</select>
					<button>PAY</button>
				</div>
			</div> */}
		</div>
	);
};

export default UpComingEvent;

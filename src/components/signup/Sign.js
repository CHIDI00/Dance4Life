import React, { useState } from "react";
import google from "../../assets/google.jpg";
import Facebook from "../../assets/Facebook.jpg";
import { RiCloseLine } from "react-icons/ri";
import SuccessfulMessage from "../successMessage/SuccessfulMessage";

import "./signup.css";

const Signup = function ({
	toggleSignup,
	setToggleSignup,
	// name,
	// setName,
	// email,
	// setEmail,
	// password,
	// setPassword,
	// message,
	// setMessage,
}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [message, setMessage] = useState("");

	function form(e) {
		e.preventDefault();

		setTimeout(() => {
			setName("");
			setEmail("");
			setPassword("");

			handleMessage();
		}, 1500);
	}

	function handleSubmit() {
		setTimeout(() => {
			setName("");
			setEmail("");
			setPassword("");

			handleMessage();
		}, 1500);
	}

	function handleMessage() {
		if (
			name === "" ||
			email === "" ||
			!email.includes("@gmail.com") ||
			password === ""
		) {
			setMessage(<>Please enter a valid detail.</>);
		} else {
			setMessage(
				<SuccessfulMessage>
					<h4>Account created successfully.</h4>
				</SuccessfulMessage>
			);
		}
	}

	return (
		<div className={`d4l__signup`}>
			<RiCloseLine
				size={30}
				style={{
					position: "absolute",
					top: "20px",
					right: "10px",
					cursor: "pointer",
					padding: "2px",
					background: "#fff",
					borderRadius: "2px",
				}}
				onClick={() => setToggleSignup(false)}
			/>
			<div className="d4l__form-payment">
				{handleMessage ? (
					<form onSubmit={form}>
						<h1>SIGN UP</h1>
						<input
							type="text"
							placeholder="Fullname"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<p
							className="p3"
							style={{ color: "red", fontSize: "0.8rem", margin: "0px" }}
						>
							{message}
						</p>
						<p className="p">sign up with</p>

						<div className="signup_option">
							<div className="signup_logo">
								<img src={google} alt="google" />
							</div>

							<p className="p2">Or</p>

							<div className="signup_logo">
								<img src={Facebook} alt="google" />
							</div>
						</div>

						<button className="btn" onClick={handleSubmit}>
							SIGN UP
						</button>
					</form>
				) : (
					{ message }
				)}
			</div>
		</div>
	);
};

export default Signup;

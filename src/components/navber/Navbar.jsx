import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import google from "../../assets/google.jpg";
import Facebook from "../../assets/Facebook.jpg";

import "./navber.css";

const Links = () => {
	return (
		<>
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#dance">Dance Style</a>
				</li>
				<li>
					<a href="#home">Events</a>
				</li>
				<li>
					<a href="#home">Blog</a>
				</li>
			</ul>
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleSignup, setToggleSignup] = useState(false);

	function handleToggles() {
		setToggleSignup(true);
		// setToggleMenu(false);
	}

	return (
		<div className="d4l__navbar section__padding">
			<h4 className="d4l__navbar-logo">
				DANCE4L<span>i</span>FE
			</h4>

			<div className="d4l__navbar-navlink">
				<div className="links">
					<Links />
				</div>
				<div className="d4l__navbar-signup">
					<p>
						<a href="#">Buy Ticket</a>
					</p>
					<div className="signup_form">
						<button onClick={() => setToggleSignup(true)}>SIGN UP</button>
						{toggleSignup && (
							<Signup
								toggleSignup={toggleSignup}
								setToggleSignup={setToggleSignup}
							/>
						)}
					</div>
				</div>

				<div className="d4l__navbar-menu">
					{toggleMenu ? (
						<RiCloseLine
							color="#000"
							size={28}
							style={{ cursor: "pointer" }}
							onClick={() => setToggleMenu(false)}
						/>
					) : (
						<RiMenu3Line
							color="#000"
							size={28}
							style={{ cursor: "pointer" }}
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<div className="d4l__navbar-menu_container">
							<div className="d4l__navbar-menu_navlink">
								<Links />
								<div className="d4l__navbar-menu_signup">
									<p>
										<a href="#">Buy Ticket</a>
									</p>
									<div className="signup_form">
										<button onClick={() => handleToggles()}>SIGN UP</button>
										{toggleSignup && (
											<Signup
												toggleSignup={toggleSignup}
												setToggleSignup={setToggleSignup}
											/>
										)}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const Signup = function ({ toggleSignup, setToggleSignup }) {
	return (
		<div className={`d4l__signup ${toggleSignup ? "active" : ""}`}>
			<RiCloseLine
				size={30}
				style={{
					position: "absolute",
					top: "20px",
					right: "10px",
					cursor: "pointer",
				}}
				onClick={() => setToggleSignup(false)}
			/>
			<div className="d4l__form-payment">
				<form>
					<h1>SIGN UP</h1>
					<input
						type="text"
						placeholder="Fullname"
						// value={name}
						// onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="Email"
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						// value={cardNumber}
						// onChange={(e) => setCardNumber(e.target.value)}
					/>

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

					{/* {messageDisplay} */}
					<button>SIGN UP</button>
				</form>
			</div>
		</div>
	);
};

export default Navbar;

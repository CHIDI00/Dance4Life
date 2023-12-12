import React, { useState } from "react";
import Signup from "../signup/Sign";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import "./navber.css";

const Links = () => {
	return (
		<>
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#dance">Our classes</a>
				</li>
				<li>
					<a href="#form">Register</a>
				</li>
				<li>
					<a href="#event">Events</a>
				</li>
			</ul>
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleSignup, setToggleSignup] = useState(false);

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
						{/* {message ? ( */}
						{/* "" */}
						{/* ) : ( */}
						<button onClick={() => setToggleSignup(true)}>SIGN UP</button>
						{/* )} */}
						{toggleSignup && (
							<Signup
								toggleSignup={toggleSignup}
								setToggleSignup={setToggleSignup}
								// name={name}
								// setName={setName}
								// email={email}
								// setEmail={setEmail}
								// password={password}
								// setPassword={setPassword}
								// message={message}
								// setMessage={setMessage}
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
										<a href="">Buy Ticket</a>
									</p>
									<div className="signup_form">
										<button onClick={() => setToggleSignup(true)}>
											SIGN UP
										</button>
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

export default Navbar;

import React, { useState } from "react";
import Signup from "../signup/Sign";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import d4llogo from "../../assets/d4llogo.png";
import Ticket from "../ticket/Ticket";
import "./navber.css";

const Links = ({ closeMenu }) => {
	return (
		<>
			<ul>
				<li onClick={closeMenu}>
					<a href="#home">Home</a>
				</li>
				<li onClick={closeMenu}>
					<a href="#dance">Our classes</a>
				</li>
				<li onClick={closeMenu}>
					<a href="#form">Register</a>
				</li>
				<li onClick={closeMenu}>
					<a href="#event">Events</a>
				</li>
			</ul>
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleSignup, setToggleSignup] = useState(false);
	const [toggleTicket, setToggleTicket] = useState(false);

	function closeMenu() {
		setToggleMenu(false);
	}

	const [message, setMessage] = useState("");

	return (
		<div className="d4l__navbar section__padding">
			<h4 className="d4l__navbar-logo">
				<img src={d4llogo} alt="logo" />
				DANCERS4L<span>i</span>FE
				<div className="buy__ticket">
					{toggleTicket && <Ticket setToggleTicket={setToggleTicket} />}
				</div>
			</h4>

			<div className="d4l__navbar-navlink">
				<div className="links">
					<Links />
				</div>
				<div className="d4l__navbar-signup">
					<div className="buy__ticket">
						<p onClick={() => setToggleTicket(true)}>
							<a href="#">Buy Ticket</a>
						</p>
						{toggleTicket && <Ticket setToggleTicket={setToggleTicket} />}
					</div>
					<div className="signup_form">
						{/* ////////////////////////////////////////////////////// */}
						{message ? (
							""
						) : (
							<button onClick={() => setToggleSignup(true)}>SIGN UP</button>
						)}
						{toggleSignup && (
							<Signup
								toggleSignup={toggleSignup}
								setToggleSignup={setToggleSignup}
								message={message}
								setMessage={setMessage}
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
								<Links closeMenu={closeMenu} />
								<div className="d4l__navbar-menu_signup">
									<p onClick={() => setToggleTicket(true)}>
										<a href="#">Buy Ticket</a>
									</p>

									<div className="signup_form">
										{/* ////////////////////////////////////////////////////// */}
										{message ? (
											""
										) : (
											<button
												onClick={() => {
													setToggleSignup(true);
												}}
											>
												SIGN UP
											</button>
										)}
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

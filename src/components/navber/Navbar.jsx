import React, { useState } from "react";
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
					<button>SIGN UP</button>
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
									<button>SIGN UP</button>
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

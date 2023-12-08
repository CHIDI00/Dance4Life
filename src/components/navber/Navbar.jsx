import React from "react";
import "./navber.css";

const Navbar = () => {
	return (
		<div className="d4l__navbar section__padding">
			<h4 className="d4l__navbar-logo">
				DANCE4L<span>i</span>FE
			</h4>

			<div className="d4l__navbar-navlink">
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
			</div>

			<div className="d4l__navbar-signup">
				<p>
					<a href="#">Buy Ticket</a>
				</p>
				<button>SIGN UP</button>
			</div>
		</div>
	);
};

export default Navbar;

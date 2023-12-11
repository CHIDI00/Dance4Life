import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div className="d4l__footer section__padding">
			<div className="d4l__footer-container">
				<div className="d4l__footer-container_links">
					<div className="d4l__footer-logo grid">
						<h1>
							<a href="#">
								DANCERS4L<span>i</span>FE
							</a>
						</h1>

						<p>Dance the hidden language of the soul.</p>
					</div>
					<div className="d4l__footer-link grid">
						<div className="link-about">
							<h4>About us</h4>
							<p className="about">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
								culpa sint eveniet odit inventore cumque officia explicabo
								molestiae. Voluptate, sapiente!
							</p>
						</div>
						<p>
							<a href="#">Careers</a>
						</p>
						<p>
							<a href="#">Mobile</a>
						</p>
					</div>

					<div className="d4l__footer-links grid">
						<h4>Contact</h4>
						<p>
							<a href="#">Help/FAQ</a>
						</p>
						<p>
							<a href="#">Press</a>
						</p>
						<p>
							<a href="#">Affilates</a>
						</p>
						<p>
							<a href="#">dancer4life@gmail.com</a>
						</p>
					</div>

					<div className="d4l__footer-newsupdate grid">
						<div className="email-container">
							<div className="email">
								<input type="email" placeholder="Enter email address" />
								<button>Subscribe</button>
							</div>
							<p>Subscribe to our news and update</p>
						</div>
					</div>
				</div>

				<div className="copyright">
					<p>
						COPY RIGHT &copy; {new Date().getFullYear()} dancers4life@life.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

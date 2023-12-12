import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import "./successfulMessage.css";

const SuccessfulMessage = ({ children }) => {
	return (
		<div className="d4l__successful-signup_container">
			<RiCheckboxCircleFill size={110} color="green" />
			<h4>{children}</h4>
		</div>
	);
};

export default SuccessfulMessage;

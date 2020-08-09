import React from "react";
import './Time.css';

export default (props) => {
	const {departureTime, arrivalTime} = props;
	return (
		<div className="time">
			<span className="departureTime">{departureTime}</span> – <span className="arrivalTime">{arrivalTime}</span>
		</div>
	);
};

import React from "react";
import './Direction.css';

export default (props) => {
	const {origin, destination} = props;
	return (
		<div className="direction">
			<span className="origin">{origin}</span> – <span className="destination">{destination}</span>
		</div>
	);
};

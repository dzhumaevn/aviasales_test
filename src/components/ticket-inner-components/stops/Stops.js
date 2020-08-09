import React from "react";
import './Stops.css';

export default (props) => {
	const {stopsCount, stops} = props;
	return (
		<React.Fragment>
			<div className="stopsCount">{stopsCount}</div>
			<div className="stops">{stops ? stops : '—'}</div>
		</React.Fragment>
	);
};

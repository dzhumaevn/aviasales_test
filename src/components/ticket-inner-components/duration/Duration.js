import React from "react";
import './Duration.css';

export default (props) => {
	const {durationValue} = props;
	return (
		<React.Fragment>
			<div className="durationTitle">В пути</div>
			<div className="durationValue">{durationValue}</div>
		</React.Fragment>
	);
};

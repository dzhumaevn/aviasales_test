import React from "react";
import './Sorting.css';

export default ({onSort, sortBy}) => {
	const chepeastClasses = `cheapest ${sortBy === 'cheapest' ? 'active' : ''} p-4`;
	const fastestClasses = `fastest ${sortBy === 'fastest' ? 'active' : ''} p-4`;
	return (
		<div className="sorting mb-4">
			<button className={chepeastClasses} onClick={() => onSort('cheapest')}>Самый дешёвый</button>
			<button className={fastestClasses} onClick={() => onSort('fastest')}>Самый быстрый</button>
		</div>
	);
};

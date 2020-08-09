const getArrivalTime = (departureTime, duration) => {
	return new Date(departureTime + duration).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const getDurationTime = (ms) => {
	const date = new Date(0, 0, 0, 0, 0, 0, ms);
	if (date.getDay() === 0) {
		return `${date.getHours()}ч ${date.getMinutes()}м`;
	} else {
		return `${date.getDay()}д ${date.getHours()}ч`;
	}
};

const getStopsCount = (stops) => {
	if (stops === 0) {
		return 'Без пересадок';
	} else if (stops === 1) {
		return '1 пересадка';
	} else {
		return `${stops} пересадки`;
	}
};

export {
	getArrivalTime,
	getDurationTime,
	getStopsCount
};

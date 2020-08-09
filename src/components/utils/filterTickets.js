export default (tickets, filters) => {
	const filtersKeys = Object.keys(filters);
	const newFilters = filtersKeys.filter((key) => filters[key]).map((key) => +key);

	if (!(tickets.length && newFilters.length) || newFilters.includes(-1)) {
		return tickets;
	}

	return tickets.filter(({segments}) => {
		const [thither, back] = segments;
		const thitherStops = thither.stops;
		const backStops = back.stops;

		return (newFilters.includes(thitherStops.length) && newFilters.includes(backStops.length))
	});
};

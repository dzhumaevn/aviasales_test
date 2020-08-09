export default (tickets, sortBy) => {
	switch (sortBy) {
		case 'cheapest':
			return tickets.flat().sort((item1, item2) => item1.price - item2.price);
		case 'fastest':
			return tickets.flat().sort((item1, item2) => {
				const time1 = item1.segments[0].duration + item1.segments[1].duration;
				const time2 = item2.segments[0].duration + item2.segments[1].duration;
				return time1 - time2;
			});
		default:
			return tickets;
	}
};

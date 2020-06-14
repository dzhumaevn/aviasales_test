const getTickets = async () => {
	const response = await fetch('https://front-test.beta.aviasales.ru/search');
	const {searchId} = await response.json();

	const tickets = [];
	async function subscribe() {
		try {
			const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
			const {tickets: ticketsPack, stop} = await response.json();
			if (!stop) {
				tickets.push(ticketsPack);
				return await subscribe();
			} else {
				//Самый дешевый
				const flatted = tickets.flat().sort((item1, item2) => item1.price - item2.price);

				//Самый быстрый
				// const flatted = tickets.flat().sort((item1, item2) => {
				// 	const time1 = item1.segments[0].duration + item1.segments[1].duration;
				// 	const time2 = item2.segments[0].duration + item2.segments[1].duration;
				// 	return time1 - time2;
				// });

				return flatted;
			}
		} catch (e) {
			await new Promise(resolve => setTimeout(resolve, 1000));
			return await subscribe();
		}
	}

	return await subscribe();
};

export default getTickets;

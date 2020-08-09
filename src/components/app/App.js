import React, {Component} from 'react';
import './App.css';
import getTickets from "../../getTickets";
import Logo from "../logo/Logo";
import Filters from "../filters/Filters";
import Sorting from "../sorting/Sorting";
import Tickets from "../tickets/Tickets";
import filterTickets from "../utils/filterTickets";
import sortTickets from "../utils/sortTickets";

class App extends Component {
	state = {
		tickets: [],
		showMoreCount: 5,
		filters: {
			'-1': false, // All
			'0': false, // Without stops
			'1': false, // 1 stop
			'2': false, // 2 stop
			'3': false // 3 stop
		},
		sortBy: 'cheapest',
		loading: true
	};

	componentDidMount() {
		(async () => {
			const tickets = await getTickets();
			this.setState({tickets, loading: false});
		})();
	}

	onFilter = (filter) => {
		this.setState((state) => {
			return {
				filters: {...state.filters, ...filter}
			}
		});
	};

	onSort = (sortBy) => {
		this.setState({sortBy});
	};

	onShowMore = () => {
		this.setState((state) => ({
			showMoreCount: state.showMoreCount += 5,
		}));
	};

	render() {
		const {tickets: unProcessedTickets, showMoreCount, filters, sortBy, loading} = this.state;
		const tickets = sortTickets(filterTickets(unProcessedTickets, filters), sortBy).slice(0, showMoreCount);

		return (
			<div className="App">
				<div className="container mt-3">
					<div className="row">
						<div className="col-12 logoContainer mb-2">
							<Logo/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-4">
							<Filters onFilter={this.onFilter}/>
						</div>
						<div className="col-12 col-md-8">
							<Sorting onSort={this.onSort} sortBy={sortBy}/>
							<Tickets tickets={tickets} onShowMore={this.onShowMore} loading={loading}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

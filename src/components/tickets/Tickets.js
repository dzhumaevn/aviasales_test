import React from "react";
import './TIckets.css';
import Ticket from "../ticket/Ticket";
import Loading from "../loading/Loading";

export default ({tickets, onShowMore, loading}) => {
	const ticketsHtml = tickets.map((ticket) => <Ticket key={`${ticket.carrier}_${Math.random()}`} ticket={ticket}/>);
	const content = loading ? <Loading/> : ticketsHtml;
	return (
		<div className="tickets mb-5">
			{(() => content)()}
			<button disabled={loading} onClick={onShowMore}>Показать ещё</button>
		</div>
	);
};

import React from "react";
import './Ticket.css';
import Direction from "../ticket-inner-components/direction/Direction";
import Time from "../ticket-inner-components/time/Time";
import Duration from "../ticket-inner-components/duration/Duration";
import Stops from "../ticket-inner-components/stops/Stops";
import {getStopsCount, getDurationTime, getArrivalTime} from '../utils/ticketUtils';

class FlightData {
	constructor(flight) {
		this._MS_IN_MIN = 60000;
		this._departureDate = new Date(flight.date);

		this.origin = flight.origin;
		this.destination = flight.destination;

		this.departureTime = this._departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		this.arrivalTime = getArrivalTime(this._departureDate.getTime(), flight.duration * this._MS_IN_MIN);
		this.duration = getDurationTime(flight.duration * this._MS_IN_MIN);

		this.stops = flight.stops;
		this.stopsCount = getStopsCount(this.stops.length);
	}

	getOrigin () {return this.origin};
	getDestination = () => this.destination;
	getDepartureTime = () => this.departureTime;
	getArrivalTime = () => this.arrivalTime;
	getDuration = () => this.duration;
	getStops = () => this.stops;
	getStopsCount = () => this.stopsCount;
}

export default ({ticket}) => {
	const {price, carrier: iata, segments} = ticket;
	const [thither, back] = segments;

	const thitherData = new FlightData(thither);
	const backData = new FlightData(back);

	return (
		<div className="ticketContainer p-4 mb-4">
			<div className="row">
				<div className="col-12">
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<div className="price mb-3">{price.toLocaleString()} Р</div>
						<div className="mr-4"><img src={`https://pics.avs.io/99/36/${iata}.png`} alt=""/></div>
					</div>
				</div>

				<div className="col-4 col-md-4">
					<div className="thither">
						<Direction origin={thitherData.getOrigin()} destination={thitherData.getDestination()}/>
						<Time departureTime={thitherData.getDepartureTime()} arrivalTime={thitherData.getArrivalTime()}/>
					</div>
					<div className="back">
						<Direction origin={backData.getOrigin()} destination={backData.getDestination()}/>
						<Time departureTime={backData.getDepartureTime()} arrivalTime={backData.getArrivalTime()}/>
					</div>
				</div>

				<div className="col-3 col-md-4">
					<div className="thither">
						<Duration durationValue={thitherData.getDuration()}/>
					</div>

					<div className="back">
						<Duration durationValue={backData.getDuration()}/>
					</div>
				</div>
				<div className="col-5 col-md-4">
					<div className="thither">
						<Stops stopsCount={thitherData.getStopsCount()} stops={thitherData.getStops().toString()}/>
					</div>
					<div className="back">
						<Stops stopsCount={backData.getStopsCount()} stops={backData.getStops().toString()}/>
					</div>
				</div>
			</div>
		</div>
	);
};

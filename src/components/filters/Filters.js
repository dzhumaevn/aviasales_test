import React from "react";
import './Filters.css';

export default ({onFilter}) => {
	const formChecks = [
		{id: 'all', value: '-1', text: 'Все'},
		{id: 'whitoutStops', value: '0', text: 'Без пересадок'},
		{id: 'oneStop', value: '1', text: '1 пересадка'},
		{id: 'twoStops', value: '2', text: '2 пересадки'},
		{id: 'threeStops', value: '3', text: '3 пересадки'},
	];

	const getFormChecksHtml = (formChecks) => {
		return formChecks.map(({id, value, text}) => {
			return (
				<div key={id} className="form-check">
					<input className="form-check-input"
					       type="checkbox"
					       value=""
					       id={id}
					       onInput={(e) => onFilter({[value]: e.target.checked})}/>
					<label className="form-check-label" htmlFor={id}>
						{text}
					</label>
				</div>
			)
		});
	};

	return (
		<div className="filtersContainer pt-4 pb-3 mb-4">
			<h5 className="header">Количество пересадок</h5>
			{getFormChecksHtml(formChecks)}
		</div>
	);
};

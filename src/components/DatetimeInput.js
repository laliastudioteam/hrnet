import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import "../styles/DatetimeInput.css";

const DatetimeInput = ({label, textId, onChange}) => {
	const handleDateChange = option => {
		console.log(option.moment);
		onChange(option.format("MMM Do YY"));
	};
	return (
		<div>
			{label !== "" && (
				<label className="form-label" htmlFor={textId}>
					{label}
				</label>
			)}
			<Datetime inputProps={{name: textId}} onChange={handleDateChange} />
		</div>
	);
};

export default DatetimeInput;

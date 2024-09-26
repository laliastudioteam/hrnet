import React from "react";

import "../styles/NumberInput.css";

const NumberInput = ({label, textId, onChange}) => {
	return (
		<>
			<label className="form-label" htmlFor={textId}>
				{label}
			</label>
			<input
				className="form-control"
				type="number"
				name={textId}
				id={textId}
				onChange={(e, test) => onChange(e.target.value)}
			/>
		</>
	);
};

export default NumberInput;

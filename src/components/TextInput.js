import React from "react";

import "../styles/TextInput.css";

const TextInput = ({label, textId, onChange}) => {
	return (
		<>
			<label className="form-label" htmlFor={textId}>
				{label}
			</label>
			<input
				className="form-control"
				type="texte"
				name={textId}
				onChange={(e, test) => onChange(e.target.value)}
			/>
		</>
	);
};

export default TextInput;

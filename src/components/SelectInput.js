import React, {useState} from "react";
import Select from "react-select";

const SelectInput = ({label, textId, data, onChange}) => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelectChange = option => {
		setSelectedOption(option);
		onChange(option.value);
	};

	return (
		<div>
			{label !== "" && (
				<label className="form-label" htmlFor={textId}>
					{label}
				</label>
			)}
			<Select
				value={selectedOption}
				onChange={handleSelectChange}
				options={data.options}
				name={textId}
				id={textId}
			/>
		</div>
	);
};

export default SelectInput;

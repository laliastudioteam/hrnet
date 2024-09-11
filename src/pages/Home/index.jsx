import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addEmployee} from "../../Features/employees/employeesSlice";
import {useNavigate, NavLink} from "react-router-dom";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import NumberInput from "../../components/NumberInput";
import DatetimeInput from "../../components/DatetimeInput";

import "bootstrap/dist/css/bootstrap.css";

function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [startDate, setStartDate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const newEmployee = {
			firstName,
			lastName,
			birthDate,
			startDate,
			street,
			city,
			state,
			zipCode,
			department,
		};

		dispatch(addEmployee(newEmployee));

		setIsModalOpen(true);

		setFirstName("");
		setLastName("");
		setBirthDate("");
		setStartDate("");
		setStreet("");
		setCity("");
		setState("");
		setZipCode("");
		setDepartment("");
	};

	return (
		<>
			<div className="container h-100 p-5 bg-body-light border rounded-3 justify-content-center">
				<div className="container py-5 bg-secondary rounded-3">
					<h1 className="display-5 fw-bold text-light">HRNET</h1>
					<p className="col-md-8 fs-4 text-light">
						Use this form to create a new employee filling all input.
						<strong>Then click Save.</strong>
					</p>
					<NavLink to="../Employeeslist" className="btn btn-primary">
						View Current Employees
					</NavLink>
				</div>
				<form onSubmit={handleSubmit} id="create-employee">
					<div className="row justify-content-md-center border-bottom  me-0 ms-0 mt-4 mb-4  p-4">
						<div className="col-md-6 d-md-flex">
							<h2 className="text-secondary mx-auto">Create a new HRNET Employee</h2>
						</div>
					</div>
					<div className="row p-4 border m-1">
						<div className="col-md-6">
							<TextInput
								label="First Name"
								value={firstName}
								textId="first-name"
								onChange={setFirstName}
							/>
						</div>
						<div className="col-md-6">
							<TextInput
								label="Last Name"
								value={lastName}
								textId="last-name"
								onChange={setLastName}
							/>
						</div>
						<div className="col-md-6">
							<DatetimeInput
								label="Date of Birth"
								name="birthdate"
								value={birthDate}
								onChange={setBirthDate}
							/>
						</div>
						<div className="col-md-6">
							<DatetimeInput
								label="Start Date"
								name="startdate"
								value={startDate}
								onChange={setStartDate}
							/>
						</div>
					</div>
					<fieldset className="row bg-light me-0 ms-0 mt-4 mb-4  p-4">
						<div className="col-md-12">
							<legend>Address</legend>
						</div>
						<div className="col-md-6">
							<TextInput label="Street" value={street} textId="street" onChange={setStreet} />
						</div>
						<div className="col-md-6">
							<TextInput label="City" value={city} textId="city" onChange={setCity} />
						</div>
						<div className="col-md-6">
							<SelectInput
								label="State"
								name="state"
								data={{
									options: [
										{value: "Alabama", label: "Alabama"},
										{value: "Alaska", label: "Alaska"},
										{value: "American Samoa", label: "American Samoa"},
										{value: "Arizona", label: "Arizona"},
										{value: "Arkansas", label: "Arkansas"},
										{value: "California", label: "California"},
										{value: "Colorado", label: "Colorado"},
										{value: "Connecticut", label: "Connecticut"},
										{value: "Delaware", label: "Delaware"},
										{value: "District of Columbia", label: "District of Columbia"},
										{
											value: "Federated States of Micronesia",
											label: "Federated States of Micronesia",
										},
										{value: "Florida", label: "Florida"},
										{value: "Georgia", label: "Georgia"},
										{value: "Guam", label: "Guam"},
										{value: "Hawaii", label: "Hawaii"},
										{value: "Idaho", label: "Idaho"},
										{value: "Illinois", label: "Illinois"},
										{value: "Indiana", label: "Indiana"},
										{value: "Iowa", label: "Iowa"},
										{value: "Kansas", label: "Kansas"},
										{value: "Kentucky", label: "Kentucky"},
										{value: "Louisiana", label: "Louisiana"},
										{value: "Maine", label: "Maine"},
										{value: "Marshall Islands", label: "Marshall Islands"},
										{value: "Maryland", label: "Maryland"},
										{value: "Massachusetts", label: "Massachusetts"},
										{value: "Michigan", label: "Michigan"},
										{value: "Minnesota", label: "Minnesota"},
										{value: "Mississippi", label: "Mississippi"},
										{value: "Missouri", label: "Missouri"},
										{value: "Montana", label: "Montana"},
										{value: "Nebraska", label: "Nebraska"},
										{value: "Nevada", label: "Nevada"},
										{value: "New Hampshire", label: "New Hampshire"},
										{value: "New Jersey", label: "New Jersey"},
										{value: "New Mexico", label: "New Mexico"},
										{value: "New York", label: "New York"},
										{value: "North Carolina", label: "North Carolina"},
										{value: "North Dakota", label: "North Dakota"},
										{value: "Northern Mariana Islands", label: "Northern Mariana Islands"},
										{value: "Ohio", label: "Ohio"},
										{value: "Oklahoma", label: "Oklahoma"},
										{value: "Oregon", label: "Oregon"},
										{value: "Palau", label: "Palau"},
										{value: "Pennsylvania", label: "Pennsylvania"},
										{value: "Puerto Rico", label: "Puerto Rico"},
										{value: "Rhode Island", label: "Rhode Island"},
										{value: "South Carolina", label: "South Carolina"},
										{value: "South Dakota", label: "South Dakota"},
										{value: "Tennessee", label: "Tennessee"},
										{value: "Texas", label: "Texas"},
										{value: "Utah", label: "Utah"},
										{value: "Vermont", label: "Vermont"},
										{value: "Virgin Island", label: "Virgin Island"},
										{value: "Virginia", label: "Virginia"},
										{value: "Washington", label: "Washington"},
										{value: "West Virginia", label: "West Virginia"},
										{value: "Wisconsin", label: "Wisconsin"},
										{value: "Wyoming", label: "Wyoming"},
									],
								}}
								value={state}
								onChange={setState}
							/>
						</div>
						<div className="col-md-6">
							<NumberInput
								label="Zip Code"
								value={zipCode}
								textId="zip-code"
								onChange={setZipCode}
							/>
						</div>
					</fieldset>
					<div className="row justify-content-md-center border me-0 ms-0 mt-4 mb-4  p-4">
						<div className="col-md-6">
							<SelectInput
								label="Department"
								name="department"
								data={{
									options: [
										{value: "sales", label: "Sales"},
										{value: "marketing", label: "Marketing"},
										{value: "engineering", label: "Engineering"},
										{value: "humanresources", label: "Human Resources"},
										{value: "legal", label: "Legal"},
									],
								}}
								value={department}
								onChange={setDepartment}
							/>
						</div>
					</div>
					<div className="row justify-content-md-center bg-info me-0 ms-0 mt-4 mb-4  p-4">
						<div className="col-md-6 d-md-flex">
							<button name="validate" className="btn btn-primary mx-auto" type="submit">
								Save the employee
							</button>
						</div>
					</div>
				</form>
			</div>

			{isModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<h2>Employee Created!</h2>
						<p>The new employee has been successfully added.</p>
						<button onClick={() => navigate("/Employeeslist")}>Go to Employee List</button>
						<button onClick={() => setIsModalOpen(false)}>Close</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Home;

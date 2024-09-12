import React, {useState} from "react";

// import Redux
import {useDispatch} from "react-redux";
import {addEmployee} from "../../Features/employees/employeesSlice";

// import Router
import {NavLink} from "react-router-dom";

// import TextInput component
import TextInput from "../../components/TextInput";

// import SelectInput component
import SelectInput from "../../components/SelectInput";

// import NumberInput component
import NumberInput from "../../components/NumberInput";

// import DatetimeInput component
import DatetimeInput from "../../components/DatetimeInput";

// import NPM Modal module
import {LaliaModal} from "lalia-modal";

// import Boostrap Style
import "bootstrap/dist/css/bootstrap.css";

// import Forms's Select Lists
import {statesList, departmentsList} from "../../data/listOptions.js";

// import Texts Lists
import {textsModal} from "../../data/texts.js";

function Home() {
	const dispatch = useDispatch();

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState({});

	// Form useStates
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [startDate, setStartDate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");

	// Close the modal
	const handleModalClose = () => {
		setIsModalOpen(false); // Fermer la modal
	};

	// Handle Form submit function
	const handleSubmit = e => {
		// Prevent form submit
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

		// #1# Add data to REDUX Toolkit
		dispatch(addEmployee(newEmployee));

		// #2# Modal content from text data
		setModalContent({
			title: textsModal.title,
			content: textsModal.content,
			closeButtonText: textsModal.closeButtonText,
		});

		// #3# Open the modal
		setIsModalOpen(true);
	};

	return (
		<>
			<div className="container h-100 p-5 bg-body-light border rounded-3 justify-content-center">
				<div className="container py-5 bg-secondary rounded-3">
					<h1 className="display-5 fw-bold text-light">HRNET</h1>
					<p className="col-md-8 fs-4 text-light">
						Use this form to create a new employee by filling out all inputs.
						<strong> Then click Save.</strong>
					</p>
					<NavLink to="../Employeeslist" className="btn btn-primary">
						View Current Employees
					</NavLink>
				</div>
				<form onSubmit={handleSubmit} id="create-employee">
					<div className="row justify-content-md-center border-bottom me-0 ms-0 mt-4 mb-4 p-4">
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
					<fieldset className="row bg-light me-0 ms-0 mt-4 mb-4 p-4">
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
									options: statesList,
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
					<div className="row justify-content-md-center border me-0 ms-0 mt-4 mb-4 p-4">
						<div className="col-md-6">
							<SelectInput
								label="Department"
								name="department"
								data={{
									options: departmentsList,
								}}
								value={department}
								onChange={setDepartment}
							/>
						</div>
					</div>
					<div className="row justify-content-md-center bg-info me-0 ms-0 mt-4 mb-4 p-4">
						<div className="col-md-6 d-md-flex">
							<button name="validate" className="btn btn-primary mx-auto" type="submit">
								Save the employee
							</button>
						</div>
					</div>
				</form>
			</div>
			{/* Modal */}
			{isModalOpen && (
				<LaliaModal
					title={modalContent.title}
					content={modalContent.content}
					closeButtonText={modalContent.closeButtonText}
					showCloseIcon={true}
					onClose={handleModalClose} // Gère la fermeture de la modal
				/>
			)}
		</>
	);
}

export default Home;

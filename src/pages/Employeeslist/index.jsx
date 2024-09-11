import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {DataTable} from "react-basic-datatable";

import "bootstrap/dist/css/bootstrap.css";

function Employeeslist() {
	const employees = useSelector(state => state.employees.employees);
	console.log(employees);
	const columns = [
		{label: "First Name", field: "firstName"},
		{label: "Last Name", field: "lastName"},
		{label: "Start Date", field: "startDate"},
		{label: "Date of Birth", field: "birthDate"},
		{label: "Street", field: "street"},
		{label: "City", field: "city"},
		{label: "State", field: "state"},
		{label: "Zip Code", field: "zipCode"},
		{label: "Department", field: "department"},
	];

	return (
		<div className="container h-100 p-5 bg-body-light border rounded-3 justify-content-center">
			<div className="container py-5 bg-secondary rounded-3">
				<h1 className="display-5 fw-bold text-light">HRNET</h1>
				<p className="col-md-8 fs-4 text-light">
					Use this datatable to <strong>show, filter or search into</strong> employees
					list.
				</p>
				<NavLink to="../Home" className="btn btn-primary">
					Go back to Home
				</NavLink>
			</div>
			<div className="row  border-bottom  me-0 ms-0 mt-4 mb-4  p-4">
				<div className="col-md-12 d-md-flex">
					<h2 className="text-secondary ">Employees's list</h2>
				</div>
			</div>
			<div className="row  me-0 ms-0 mt-4 mb-4  p-4">
				<div className="col-md-6 d-md-flex"></div>
				{employees.length > 0 ? (
					<DataTable columns={columns} rows={employees} showingLength={[5, 10, 15]} />
				) : (
					<p>No employees found.</p>
				)}
			</div>
		</div>
	);
}

export default Employeeslist;

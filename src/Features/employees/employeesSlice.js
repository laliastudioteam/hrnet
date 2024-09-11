import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	employees: [],
};

const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			// Ajouter un nouvel employé
			state.employees.push(action.payload);
		},
	},
});

export const {addEmployee} = employeesSlice.actions;

export default employeesSlice.reducer;

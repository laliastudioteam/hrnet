import {configureStore} from "@reduxjs/toolkit";
import employeesReducer from "../Features/employees/employeesSlice"; // importer la slice

export const store = configureStore({
	reducer: {
		employees: employeesReducer, // ajouter la slice au store
	},
});

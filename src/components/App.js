import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Provider} from "react-redux";

import {store} from "../app/store";

import Home from "../pages/Home";
import Employeeslist from "../pages/Employeeslist";
import Unknown from "../pages/Unknown";

import "../styles/App.css";

function App() {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<div>
					<Router>
						<div className="main-container">
							<Routes>
								<Route path="/" element={<Home />} />

								<Route path="/home" element={<Home />} />
								<Route path="/Employeeslist" element={<Employeeslist />} />

								<Route path="*" element={<Unknown />} />
							</Routes>
						</div>
					</Router>
				</div>
			</React.StrictMode>
		</Provider>
	);
}

export default App;

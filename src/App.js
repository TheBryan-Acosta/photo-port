import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import React from "react";

function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				<About></About>
			</main>
		</div>
	);
}

export default App;

import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
	productionPrefix: "co"
});

const App = () => {
	return (
		<>
			<BrowserRouter>
				<StylesProvider generateClassName={generateClassName}>
					<Header />
					<MarketingApp />
				</StylesProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

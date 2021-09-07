import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import Resume from "./components/Resume/index";
import Navbar from "./components/General/Navbar";
import Projects from "./components/Projects/index";
import Certificates from "./components/Certificates";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

import "./App.css";

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<SmoothScroll>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/projects" component={Projects} />
					<Route
						exact
						path="/certificates"
						component={Certificates}
					/>
				</Switch>
			</SmoothScroll>
		</React.Fragment>
	);
}

export default App;

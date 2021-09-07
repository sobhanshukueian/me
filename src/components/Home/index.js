import React from "react";
import Header from "./Header";
import Particles from "./Particles";
import { makeStyles } from "@material-ui/core";

import Intro from "./Intro";
import Skills from "./Skills";
import Education from "./Education";
import Background from "../../kevin-bhagat-zNRITe8NPqY-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		backdropFilter: "blur(10px)",
		position: "relative",
		height: "100vh",
	},
	introContainer: {
		height: "100vh",
	},
	skillContainer: {
		height: "100vh",
		backgroundImage: `url(${Background})`,
		backgroundSize: "cover",
		display: "grid",
	},
}));
const Home = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.root}>
				<Header />
				<Particles />
			</div>
			<div className={classes.introContainer}>
				<Intro />
			</div>
			<div className={classes.skillContainer}>
				<Education />
			</div>
			<div className={classes.introContainer}>
				<Skills />
			</div>
		</React.Fragment>
	);
};

export default Home;

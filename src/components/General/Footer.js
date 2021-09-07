import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
	bottomNavContainer: {
		background: "#6c757d",
	},
	root: {
		"& .MuiSvgIcon-root": {
			fill: "#343A40",
			"&:hover": {
				fill: "#343A40",
				fontSize: "1.8rem",
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<BottomNavigation className={classes.bottomNavContainer}>
			<BottomNavigationAction
				icon={<GitHub />}
				className={classes.root}
			/>
			<BottomNavigationAction
				icon={<Instagram />}
				className={classes.root}
			/>
			<BottomNavigationAction
				icon={<LinkedIn />}
				className={classes.root}
			/>
		</BottomNavigation>
	);
};
export default Footer;

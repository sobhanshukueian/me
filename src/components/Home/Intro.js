import { makeStyles, Avatar, Grid, Fade } from "@material-ui/core";
import VizSensor from "react-visibility-sensor";

import React, { useState } from "react";

import avatar from "../../avatar2.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#212529",
		color: "#adb5bd",
		position: "relative",
		height: "50vh",
		top: "25%",
	},
	intro: {
		position: "absolute",
		top: "50%",
		left: "25%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
	txtContainer: {
		position: "absolute",
		top: "50%",
		left: "70%",
		transform: "translate(-50%,-50%)",
		textAlign: "center",
		zIndex: 1,
	},
	txt: {
		fontSize: "14px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
		},
	},
	avatar: {
		width: theme.spacing(30),
		height: theme.spacing(30),
		margin: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			width: theme.spacing(15),
			height: theme.spacing(15),
		},
	},
}));
const Intro = () => {
	const classes = useStyles();
	const [show, setShow] = useState(false);

	return (
		<React.Fragment>
			<VizSensor
				onChange={(isVisible) => {
					setShow(isVisible);
				}}
			>
				<div className={classes.root}>
					<div className={classes.intro}>
						<Grid container justify="center">
							<Avatar
								className={classes.avatar}
								src={avatar}
								alt="Sobhan Shukueian"
							/>
						</Grid>
					</div>
					<div className={classes.txtContainer}>
						<Fade in={show} timeout={2000}>
							<div className={classes.txt}>
								Loves Ai, programming, books and music.Was
								Professional Football Player and fan.Tries to
								play Setar(Really bad player!).Currently works
								with an awsome programming team(ViraGeek) as
								FullStack web developer.Professional
								Ice-Cream-Eater
							</div>
						</Fade>
					</div>
				</div>
			</VizSensor>
		</React.Fragment>
	);
};

export default Intro;

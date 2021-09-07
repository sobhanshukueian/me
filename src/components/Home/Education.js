import { makeStyles, Paper, Fade } from "@material-ui/core";
import VizSensor from "react-visibility-sensor";
import SchoolIcon from "@material-ui/icons/School";

import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "transparent",
		color: "#ced4da",
		display: "flex",
		flexDirection: "column",
		height: "50%",
	},
	title: {
		width: "100vw",
		justifyContent: "center",
		display: "flex",
		zIndex: 1,
		fontSize: "36px",
		color: "#000814",
		fontWeight: "bold",
	},
	txtContainer: {
		backdropFilter: "blur(15px)",
		textAlign: "left",
		zIndex: 1,
		margin: "auto auto",
		padding: "3rem",
	},
	txt: {
		fontSize: "18px",
		color: "#000814",
	},
	icn: {
		fontSize: 48,
	},
	educationMarg: {
		marginTop: theme.spacing(5),
	},
}));
const Education = () => {
	const classes = useStyles();
	const [show, setShow] = useState(false);

	return (
		<React.Fragment>
			<VizSensor
				onChange={(isVisible) => {
					setShow(isVisible);
				}}
			>
				<Paper className={classes.root} elevation={false}>
					<div className={classes.title}>
						EDUCATION <SchoolIcon className={classes.icn} />
					</div>
					<Fade in={show} timeout={1000}>
						<div className={classes.txtContainer}>
							<div className={classes.txt}>
								<strong>
									Bachelor of computer engineering
								</strong>
							</div>
							<div className={classes.txt}>
								<strong> Tabriz</strong> University
							</div>
							<div className={classes.txt}>
								From<strong> 2018 </strong>{" "}
							</div>
							<div className={classes.educationMarg}>
								<div className={classes.txt}>
									<strong>Master of Data Science</strong>
								</div>
								<div className={classes.txt}>
									<strong> Lucky! </strong> University
								</div>
								<div className={classes.txt}>
									From<strong> ? </strong>{" "}
								</div>
							</div>
							<div className={classes.educationMarg}>
								<div className={classes.txt}>
									<strong>Phd of Data Science</strong>
								</div>
								<div className={classes.txt}>
									<strong> Another Lucky! </strong> University
								</div>
								<div className={classes.txt}>
									From<strong> ? </strong>{" "}
								</div>
							</div>
							<div className={classes.educationMarg}>
								<div className={classes.txt}>
									<strong>Post Doc of Data Science</strong>
								</div>
								<div className={classes.txt}>
									<strong> Luckiest! </strong> University
								</div>
								<div className={classes.txt}>
									From<strong> ? </strong>{" "}
								</div>
							</div>
						</div>
					</Fade>
				</Paper>
			</VizSensor>
		</React.Fragment>
	);
};

export default Education;

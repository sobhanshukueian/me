import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import skills from "../../constants/Skills";

const useStyles = makeStyles((theme) => ({
	root: {
		backdropFilter: "blur(10px)",
		backgroundColor: "transparent",
		color: "#ced4da",
		position: "relative",
		marginTop: "auto",
	},
	title: {
		width: "100vw",
		justifyContent: "center",
		display: "flex",
		zIndex: 1,
		fontSize: "36px",
		color: "#ced4da",
		fontWeight: "bold",
		[theme.breakpoints.down("sm")]: {
			color: "#ced4da",
		},
	},
	skills: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
	},
	skill: {
		padding: "1rem",
		margin: "1rem",
		backgroundColor: "#000814",
		borderRadius: "12px",
		fontSize: "24px",
		[theme.breakpoints.down("md")]: {
			padding: "0.5rem",
			margin: "0.5rem",
			fontSize: "12px",
		},
	},
	icn: {
		fontSize: 48,
	},
}));
const Skills = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<div className={classes.title}>
					SKILLS <EmojiObjectsIcon className={classes.icn} />
				</div>
				<div className={classes.skills}>
					{skills.map((skill, index) => {
						return (
							<div className={classes.skill}>{skill.name}</div>
						);
					})}
				</div>
			</Paper>
		</React.Fragment>
	);
};

export default Skills;

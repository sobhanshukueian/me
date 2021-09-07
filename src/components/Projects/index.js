import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import projects from "../../constants/Projects";
import smallProjects from "../../constants/SmallProjects";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		height: "100%",
		textDecoration: "none",
	},
	cardContainer: {
		maxWidth: 345,
		margin: "3rem auto",
		textDecoration: "none",
	},
	txt: { textDecoration: "none" },
	title: {
		fontSize: theme.typography.pxToRem(36),
		fontWeight: theme.typography.fontWeightBold,
		margin: theme.spacing(2),
		textAlign: "center",
		color: "#6C757D",
	},
	divider: {
		backgroundColor: "#6C757D",
	},
}));

const Projects = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Grid container justify="center">
				<Grid item xs={12} md={12}>
					<div className={classes.title}>Projects</div>
				</Grid>
				{/* Projects */}
				{projects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<a href={project.link} className={classes.txt}>
							<Card className={classes.cardContainer}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Project 1"
										height="140"
										image={project.image}
									/>
									<CardContent>
										<Typography variant="h5" gutterBottom>
											{project.name}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
										>
											{project.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</a>
					</Grid>
				))}
				<Grid item xs={12} md={12}>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item xs={12} md={12}>
					<div className={classes.title}>Small Projects</div>
				</Grid>
				{/* Projects */}
				{smallProjects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<a href={project.link} className={classes.txt}>
							<Card className={classes.cardContainer}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Project 1"
										height="140"
										image={project.image}
									/>
									<CardContent>
										<Typography variant="h5" gutterBottom>
											{project.name}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
										>
											{project.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</a>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Projects;

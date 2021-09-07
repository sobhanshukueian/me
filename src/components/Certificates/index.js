import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import certificates from "../../constants/Certificates";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		// height: "100%",
		textDecoration: "none",
		padding: theme.spacing(2),
	},
	cardContainer: {
		textDecoration: "none",
	},
	txt: {
		fontSize: 16,
		fontWeight: "bold",
		textDecoration: "none",
		marginLeft: theme.spacing(2),
	},
}));

const Certificates = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Grid container justify="center" spacing={2}>
				{certificates.map((project, i) => (
					<Grid item xs={12} sm={12} md={12} key={i}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Project 1"
									height="500"
									image={project.image}
								/>
								<CardContent>
									<Typography variant="h5" gutterBottom>
										<strong>{project.name}</strong>
										{project.link ? (
											<a
												className={classes.txt}
												href={project.link}
											>
												Check Certificate
											</a>
										) : null}
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
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Certificates;

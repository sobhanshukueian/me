import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../avatar.png";

import LinkedIn from "@material-ui/icons/LinkedIn";
import Mail from "@material-ui/icons/Mail";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import TimelineIcon from "@material-ui/icons/Timeline";
import ReceiptIcon from "@material-ui/icons/Receipt";
import BookIcon from "@material-ui/icons/Book";
import GetAppIcon from "@material-ui/icons/GetApp";

import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: "#343A40",
		margin: 0,
		"& .MuiToolbar-root": {
			justifyContent: "center",
		},
	},
	arrow: {
		color: "#ADB5BD",
	},
	menuSliderContainer: {
		width: 250,
		background: "#343A40",
		height: "100%",
		zIndex: 100000,
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	listLink: {
		color: "#ADB5BD",
		textDecoration: "none",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	listItem: {
		color: "#ADB5BD",
	},
	dn: {
		color: "black",
	},
}));

const menuItems = [
	{ listIcon: <Home />, listText: "Home", listPath: "/" },
	{
		listIcon: <TimelineIcon />,
		listText: "Work Wxperience",
		listPath: "/resume",
	},
	{ listIcon: <Apps />, listText: "projects", listPath: "/projects" },
	{
		listIcon: <ReceiptIcon />,
		listText: "Certificates",
		listPath: "/certificates",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const sideList = () => (
		<Box className={classes.menuSliderContainer} component="div">
			<Avatar
				className={classes.avatar}
				src={avatar}
				alt="Mahmudul Alam"
			/>
			<Divider />
			<List>
				{menuItems.map((item, i) => (
					<ListItem
						button
						key={i}
						className={classes.listItem}
						onClick={() => setOpen(false)}
						// component={Link}
						// to={item.listPath}
					>
						<a href={item.listPath} className={classes.listLink}>
							<ListItemText primary={item.listText} />
							<ListItemIcon className={classes.listItem}>
								{item.listIcon}
							</ListItemIcon>
						</a>
					</ListItem>
				))}
				<a href="https://sobhan-shukueian.medium.com">
					<ListItem
						button
						className={classes.listItem}
						onClick={() => setOpen(false)}
					>
						<ListItemText primary={"Blog"} />
						<ListItemIcon className={classes.listItem}>
							<BookIcon />
						</ListItemIcon>
					</ListItem>
				</a>
			</List>
		</Box>
	);

	return (
		<React.Fragment>
			<Box component="nav">
				<AppBar position="static" className={classes.appbar}>
					<Toolbar>
						<Box display="flex" mr="auto" alignItems="center">
							<IconButton>
								<LinkedIn />
							</IconButton>
							<IconButton>
								<GitHub />
							</IconButton>
							<IconButton>
								<Instagram />
							</IconButton>
							<IconButton>
								<Mail />
							</IconButton>
							<IconButton>
								<GetAppIcon />
							</IconButton>
							<div className={classes.dn}>Downlaod CV</div>
						</Box>
						<IconButton onClick={() => setOpen(true)}>
							<MenuIcon className={classes.arrow} />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
				{sideList()}
				<Footer />
			</Drawer>
		</React.Fragment>
	);
};

export default Navbar;

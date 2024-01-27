
import classes from './Navbar.module.css';

// const classes = {
// 	'nav': 'Navbar_nav__DS0RX',
// 	'item': 'Navbar_nav__DS0RX'
// }

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={`${classes.item} ${classes.active}`}><a>Profile</a></div>
			<div className={classes.item}><a>Messages</a></div>
			<div className={classes.item}><a>News</a></div>
			<div className={classes.item}><a>Music</a></div>
			<div className={classes.item}><a>Settings</a></div>
      </nav>
	)
};

export default Navbar;
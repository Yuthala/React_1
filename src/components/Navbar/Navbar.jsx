
import classes from './Navbar.module.css';
import {NavLink, navData} from 'react-router-dom';


const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={`${classes.item} ${classes.active}`}><NavLink to="/profile" activeClassName= {classes.active}>Profile</NavLink></div>
			<div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
			<div className={classes.item}><a>News</a></div>
			<div className={classes.item}><a>Music</a></div>
			<div className={classes.item}><a>Settings</a></div>
      </nav>
	)
};

export default Navbar;
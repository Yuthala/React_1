import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => { //компонента, которая через props принимает динамически изменяющиеся данные
	let path = "/dialogs/" + props.id;

	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
};

export default DialogItem;
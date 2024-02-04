import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => { //компонента, которая через props принимает динамически изменяющиеся данные
	let path = "/dialogs/" + props.id;

	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
};

const Message = (props) => {
	return (
		<div className={classes.message}>{props.message}</div>
	)
};

const Dialogs = () => {

	let dialogsData = [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrew'},
		{id: 3, name: 'Sasha'},
		{id: 4, name: 'Sveta'},
		{id: 5, name: 'Viktor'},
		{id: 6, name: 'Valera'}
	];


	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				<DialogItem name="User1" id="1"/>
				<DialogItem name="User2" id="2"/>
				<DialogItem name="User3" id="3"/>
				<DialogItem name="User4" id="4"/>
				<DialogItem name="User5" id="5"/>
				<DialogItem name="User6" id="6"/>
				{/* <div className={classes.dialog}>
					<NavLink to="/dialogs/2">User 2</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/3">User 3</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/4">User 4</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/5">User 5</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/6">User 6</NavLink>
				</div> */}
			</div>
			<div className={classes.messages}>
				<Message message="Hi!" />
				<Message message="How are you?" />
				<Message message="Yo!" />
				{/* <div className={classes.message}>How are you?</div>
				<div className={classes.message}>Yo!</div> */}
			</div>
		</div>
	)
};

export default Dialogs;
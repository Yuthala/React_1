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

	let messagesData = [
		{message: 'Hi!'},
		{message: 'How are you?'},
		{message: 'Yo!'},
		{message: 'Yo!!'},
		{message: 'Yo'}
	]


	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
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
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
				{/* <div className={classes.message}>How are you?</div>
				<div className={classes.message}>Yo!</div> */}
			</div>
		</div>
	)
};

export default Dialogs;
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = () => {
	//данные
	let dialogsData = [
		{id: 1, name: 'user 1'},
		{id: 2, name: 'user 2'},
		{id: 3, name: 'user 3'},
		{id: 4, name: 'user 4'},
		{id: 5, name: 'user 5'},
		{id: 6, name: 'user 6'}
	];
	let messagesData = [
		{id: 1, message: "Hi!"},
		{id: 1, message: "How are you?"},
		{id: 1, message: "Yo!"}
	];
	//отрисовка
	let DialogsElements = dialogsData
		.map( d => <DialogItem name={d.name} id={d.id} /> );
	let MessagesElements = messagesData
		.map( m => <Message message={m.message} id={m.id} />);

	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				{ DialogsElements }
			</div>

			<div className={classes.messages}>
				{ MessagesElements }
			</div>
		</div>
	)
};

export default Dialogs;
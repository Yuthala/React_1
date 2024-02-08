import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
//import Message from './Message/Message.jsx';


const Message = (props) => {
	return (
		<div className={classes.message}>{props.message}</div>
	)
};

const Dialogs = () => {
//данные
	let dialogs = [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrew'},
		{id: 3, name: 'Sasha'},
		{id: 4, name: 'Sveta'},
		{id: 5, name: 'Viktor'},
		{id: 6, name: 'Valera'}
	];

	let messages = [
		{message: 'Hi!'},
		{message: 'How are you?'},
		{message: 'Yo!'},
		{message: 'Yo!!'},
		{message: 'Yo'}
	]

	//получаем JSx элементы
	let dialogsElements = dialogs
		.map( d => <DialogItem name={d.name} id={d.id} />); //d = dialog

	let messagesElements = messages
		.map( m => <Message message={m.message} />); //m - messages

	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				{
					dialogsElements
				}

			</div>

			<div className={classes.messages}>
				{
					messagesElements
				}
			</div>
		</div>
	)
};

export default Dialogs;
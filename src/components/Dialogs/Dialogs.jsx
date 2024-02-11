import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


// const Message = (props) => {
// 	return (
// 		<div className={classes.message}>{props.message}</div>
// 	)
// };

const Dialogs = () => {

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

	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
			</div>

			<div className={classes.messages}>
				<Message message={messagesData[0].message} id={messagesData[0].id} />
				<Message message={messagesData[1].message} id={messagesData[1].id} />
				<Message message={messagesData[2].message} id={messagesData[2].id} />
			</div>
		</div>
	)
};

export default Dialogs;
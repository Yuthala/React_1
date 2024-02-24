import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state.js';

const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;

	let DialogsElements = state.dialogsData
		.map( d => <DialogItem name={d.name} id={d.id} /> );
	let MessagesElements = state.messagesData
		.map( m => <Message message={m.message} id={m.id} />);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (
		<div className={classes.dialogs}>
			Dialogs
			<div className={classes.dialogsItems}>
				{ DialogsElements }
			</div>

			<div className={classes.messages}>
				<div>
					{ MessagesElements }
				</div>
				<div>
					<div><textarea 
						value={ newMessageBody} 
						onChange={ onNewMessageChange }
						placeholder='Enter your message'>
						</textarea></div>
					<div><button onClick={ onSendMessageClick }>Send</button></div>
				</div>
			</div>
		</div>
	)
};

export default Dialogs;
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [
		{id: 1, message: "Hi!"},
		{id: 1, message: "How are you?"},
		{id: 1, message: "Yo!"}
	],
	dialogsData: [
		{id: 1, name: 'user 1'},
		{id: 2, name: 'user 2'},
		{id: 3, name: 'user 3'},
		{id: 4, name: 'user 4'},
		{id: 5, name: 'user 5'},
		{id: 6, name: 'user 6'}
	],
	newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY: 
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE: 
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messagesData.push({id: 6, message: body});
			return state;
		default:
			return state;
	}
};


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
};


export default dialogsReducer;
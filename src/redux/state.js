const ADD_POST = 'ADD-POST';
const UPDATE_POST_TExT = 'UPDATE-POST-TExT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store= {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 12},
				{id: 2, message: "It's my first post", likesCount: 11},
				{id: 3, message: "Blabla", likesCount: 6}
			],
			newPostText: [
				'it-kamasutra'
			]
		},
	
		dialogsPage: {
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
		}
	  },
	getState() {
		return this._state;
	},
	
	rerenderEntireTree() {}, //callSubscriber

	subscribe (observer) {
		this.rerenderEntireTree = observer; //паттерн observer (addEvent Listener) //(publisher-subscriber)
	  },

	dispatch(action) { //action - это объект, который описывает какое действие совершить. Обязательно имеет type - название действия
		if (action.type === ADD_POST) { //если action имеет тип ADD-POST
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this.rerenderEntireTree(this._state);
		} else if (action.type === UPDATE_POST_TExT) {
			this._state.profilePage.newPostText = action.newText;
			this.rerenderEntireTree(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this.rerenderEntireTree(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messagesData.push({id: 6, message: body});
			this.rerenderEntireTree(this._state);
		}
	}
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => {
	return {
		type: UPDATE_POST_TExT,
		newText: text
	}
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
};

export default store;
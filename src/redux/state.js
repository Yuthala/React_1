import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
		//REDUCRES
		this._state.profilePage = profileReducer(this._state.profilePage, action); //передаем profileReducer ту часть state, которая относится к этому редьюсеру (profilePage) + весть action и вызываем его
		//this._state.profilePage - присваиваем новое значение profilePage и кладем его в тот же объект state
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		//ПЕРЕРИСОВАТЬ ДЕРЕВО
		this.rerenderEntireTree(this._state);
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
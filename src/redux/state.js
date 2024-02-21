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
			]
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
		if (action.type === 'ADD-POST') { //если action имеет тип ADD-POST
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this.rerenderEntireTree(this._state);
		} else if (action.type === 'UPDATE-POST-TExT') {
			this._state.profilePage.newPostText = action.newText;
			this.rerenderEntireTree(this._state);
		}
	}
};

// let rerenderEntireTree = () => {};

// let state = {
// 	profilePage: {
// 		posts: [
// 			{id: 1, message: 'Hi, how are you?', likesCount: 12},
// 			{id: 2, message: "It's my first post", likesCount: 11},
// 			{id: 3, message: "Blabla", likesCount: 6}
// 		],
// 		newPostText: [
// 			''
// 		]
// 	},

// 	dialogsPage: {
// 		messagesData: [
// 			{id: 1, message: "Hi!"},
// 			{id: 1, message: "How are you?"},
// 			{id: 1, message: "Yo!"}
// 		],
// 		dialogsData: [
// 			{id: 1, name: 'user 1'},
// 			{id: 2, name: 'user 2'},
// 			{id: 3, name: 'user 3'},
// 			{id: 4, name: 'user 4'},
// 			{id: 5, name: 'user 5'},
// 			{id: 6, name: 'user 6'}
// 		]
// 	}
//   };

//   export const addPost = () => {
// 	let newPost = {
// 		id: 5,
// 		message: state.profilePage.newPostText,
// 		likesCount: 0
// 	};
// 	state.profilePage.posts.push(newPost);
// 	state.profilePage.newPostText = '';
// 	rerenderEntireTree(state);
//   };


//   export const updatePostText = (newText) => {
// 	state.profilePage.newPostText = newText;
// 	rerenderEntireTree(state);
//   };

//   export const subscribe = (observer) => {
// 	rerenderEntireTree = observer; //паттерн observer (addEvent Listener) //(publisher-subscriber)
//   }

export default store;
import rerenderEntireTree from "../render";

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 12},
			{id: 2, message: "It's my first post", likesCount: 11},
			{id: 3, message: "Blabla", likesCount: 6}
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
  };

  export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
  }

export default state;
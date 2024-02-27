const ADD_POST = 'ADD-POST';
const UPDATE_POST_TExT = 'UPDATE-POST-TExT';

const profileReducer = (state, action) => {

		if (action.type === ADD_POST) { //если action имеет тип ADD-POST
			let newPost = {
				id: 5,
				message:state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
		} else if (action.type === UPDATE_POST_TExT) {
			state.newPostText = action.newText;
		}

	return state;
}

export default profileReducer;
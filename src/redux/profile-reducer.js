const ADD_POST = 'ADD-POST';
const UPDATE_POST_TExT = 'UPDATE-POST-TExT';

const profileReducer = (state, action) => {

	switch(action.type) {
		case ADD_POST: //если action имеет тип ADD-POST
			let newPost = {
				id: 5,
				message:state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_POST_TExT:
			state.newPostText = action.newText;
			return state;

		default: 
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => {
	return {
		type: UPDATE_POST_TExT,
		newText: text
	}
};

export default profileReducer;
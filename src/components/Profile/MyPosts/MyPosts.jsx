import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import store from '../../../redux/state.js';

const MyPosts = (props) => {

let PostsElements = props.posts
	.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({type: 'ADD-POST'});
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = ({type: 'UPDATE-POST-TExT', newText: text});
		props.dispatch(action);
	};

	return (
		<div className={classes.content}>

			<div className={classes.postsBlock}>
				<h3>My posts</h3>
				<div>
					<textarea 
						onChange={onPostChange} //передаем функцию, но не вызываем ее
						ref={newPostElement} 
						value={props.newPostText} 
						updatePostText={props.updatePostText} />
				</div>
				<div>
					<button onClick={ addPost }>Add Post</button>
				</div>
				<div className={classes.posts}>
					{ PostsElements }
				</div>
			</div>
      	</div>
	)
};

export default MyPosts;
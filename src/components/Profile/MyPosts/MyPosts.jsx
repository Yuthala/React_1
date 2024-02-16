import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updatePostText } from '../../../redux/state';

const MyPosts = (props) => {

let PostsElements = props.posts
	.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		//let text = newPostElement.current.value;
		props.addPost();
		//newPostElement.current.value = '';
		//props.updatePostText('');//очистить поле после нажатия Add Post
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updatePostText(text);
	};

	return (
		<div className={classes.content}>

			<div className={classes.postsBlock}>
				<h3>My posts</h3>
				<div>
					<textarea 
						onChange={onPostChange} 
						ref={newPostElement} 
						value={props.newPostText} 
						updatePostText={updatePostText} />
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
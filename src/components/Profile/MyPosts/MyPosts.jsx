import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

let PostsElements = props.posts
	.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}

	return (
		<div className={classes.content}>

			<div className={classes.postsBlock}>
				<h3>My posts</h3>
				<div>
					<textarea ref={newPostElement}></textarea>
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
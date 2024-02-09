
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{id: 0, message: 'Hi, how are you?', likesCount: 12},
		{id: 1, message: 'This is my first post!', likesCount: 11}
	];

	let postsElements = posts
		.map( p => <MyPosts message={p.message} id={p.id} likesCount={p.likesCount} />) //p = posts

	return (
		<div className={classes.content}>

			<div className={classes.postsBlock}>
				<h3>My posts</h3>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
				<div className={classes.posts}>
					{
						postsElements
					}
				</div>
			</div>
      	</div>
	)
};

export default MyPosts;
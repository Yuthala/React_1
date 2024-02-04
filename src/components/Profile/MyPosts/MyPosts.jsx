
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postsData = [
		{id: 0, message: 'Hi, how are you?', likesCount: 12},
		{id: 1, message: 'This is my first post!', likesCount: 11}
	];

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
					<Post message= {postsData[0].message} likesCount = {postsData[0].likesCount} />
					<Post message= {postsData[1].message} likesCount = {postsData[1].likesCount} />
					<Post />
				</div>
			</div>
      	</div>
	)
};

export default MyPosts;
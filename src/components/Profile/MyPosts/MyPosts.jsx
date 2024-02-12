
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

let postsData = [
	{id: 1, message: 'Hi, how are you?', likesCount: 12},
	{id: 2, message: "It's my first post", likesCount: 11},
	{id: 3, message: "Blabla", likesCount: 6}
];

let PostsElements = postsData
	.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);

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
					{ PostsElements}
				</div>
			</div>
      	</div>
	)
};

export default MyPosts;
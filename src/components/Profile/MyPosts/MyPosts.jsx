
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={classes.content}>

			<div>
				My posts
				<div>
					New post
				</div>
				<div className={classes.posts}>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
      	</div>
	)
};

export default MyPosts;
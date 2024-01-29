
import classes from './Post.module.css';

const Post = (props) => {
	return (
					<div className={classes.item}>
						<img src="https://avatars.mds.yandex.net/i?id=4705a7a2eecb7a730f13a54b861959b7f52ce654-10471467-images-thumbs&n=13"></img>
						{props.message}
						<div>
							<span>like</span>
						</div>

					</div>
	)
};

export default Post;
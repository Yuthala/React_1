
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPosts 
				posts={props.state.posts} 
				dispatch={props.dispatch}
				newPostText={props.state.newPostText}
			/>
      	</div>
	)
};

export default Profile;
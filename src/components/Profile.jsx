import './Profile.css';

const Profile = () => {
	return (
		<div className='content'>
			<div>
				<img src="https://ya.ru/images/search?source=serp&text=картинка+растущие+овощи&pos=17&rpt=simage&img_url=https%3A%2F%2Fi.sunhome.ru%2Fjournal%2F112%2Fvegetarianstvo-vhodit-v-modu-v2.orig.jpg&lr=10748" alt="main photo"></img>
			</div>

			<div>
				ava + description
			</div>

			<div>
				My posts
				<div>
					New post
				</div>
				<div className="posts">
					<div className="item">
						post 1
					</div>
					<div className="item">
						post 2
					</div>
				</div>
			</div>
      	</div>
	)
};

export default Profile;
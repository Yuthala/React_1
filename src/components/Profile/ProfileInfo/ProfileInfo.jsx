import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img src="https://ya.ru/images/search?source=serp&text=картинка+растущие+овощи&pos=17&rpt=simage&img_url=https%3A%2F%2Fi.sunhome.ru%2Fjournal%2F112%2Fvegetarianstvo-vhodit-v-modu-v2.orig.jpg&lr=10748" alt="main photo"></img>
			</div>

			<div className={classes.descriptionBlock}>
				ava+description
			</div>
      	</div>
	)
};

export default ProfileInfo;
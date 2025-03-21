import React from "react";

import ProfileCard from "../../components/ProfileCard";
import "./Profile.css";

function Profile() {
	return (
		<>
			<section className='profile'>
				<ProfileCard
					imageUrl='https://avatars.githubusercontent.com/u/90503169?v=4'
					name='Aditya Raj'
					position='Frontend Developer'
					bio='Aditya is a Frontend Developer with a passion for writing code.'
					contactNumber='+917091833975'
				/>
				<ProfileCard
					imageUrl='https://media.istockphoto.com/id/1371301832/photo/excited-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=AtgXnYVh2GpkMGlLwjIYDAwQ6fFvr0ii591bsEaJyLk='
					name='Jane Doe'
					position='Software Engineer'
					bio='Jane is a software engineer with a passion for writing code.'
					contactNumber='+1234567890'
				/>
				<ProfileCard
					imageUrl='https://st2.depositphotos.com/1715570/5435/i/450/depositphotos_54357355-stock-photo-handsome-young-black-man-smiling.jpg'
					name='Alex Doe'
					position='Software Engineer'
					bio='Alex is a software engineer with a passion for writing code.'
					contactNumber='+1234567890'
				/>
			</section>
		</>
	);
}

export default Profile;

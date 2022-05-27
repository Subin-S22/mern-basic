import React from "react";
import Layout from "src/modules/layout/layout";
import Header from "../modules/header/header";
import ProfileItem from "src/modules/profile/profileItem";

const HomePage: React.FC = () => {
	return (
		<div>
			<Header />
			<Layout>
				<ProfileItem />
			</Layout>
		</div>
	);
};

export default HomePage;

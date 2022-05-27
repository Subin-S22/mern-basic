import React from "react";
import ui from '../components'

const HomePage: React.FC = () => {
	return (
		<div>
			<ui.header />
			<ui.layout>
				<ui.profileItem />
			</ui.layout>
		</div>
	);
};

export default HomePage;

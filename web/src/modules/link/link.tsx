import React from "react";
import { linkType, singleLink } from "../../types/link";

const Link: React.FC<linkType> = ({ links }) => {
	return (
		<>
			{links.map((link: singleLink) => (
				<div key={link.name}>{link.name}</div>
			))}
		</>
	);
};

export default Link;

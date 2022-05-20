import React from "react";
import { linkType, singleLink } from "../../types/link";

const Link: React.FC<linkType> = ({ links, navigate }) => {
	return (
		<>
			{links.map((link: singleLink) => (
				<div key={link.name} onClick={() => navigate?.(link.route)}>{link.name}</div>
			))}
		</>
	);
};

export default Link;

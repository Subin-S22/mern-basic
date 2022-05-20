import React from "react";
import styles from "../../styles/header.module.css";
import clsx from "../../utils/clsx";
import Button from "../button/button";
import Link from "../link/link";
import { HEADER_LINKS, HEADER_BUTTONS } from "src/global/headerLinks";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
	const navigate = useNavigate();

	const navigationTo = (route: string) => {
		navigate(`/${route}`);
	};
	return (
		<div
			className={clsx(styles.header_flex, styles.header_justifyContent_between)}
		>
			<div>
				<Link links={HEADER_LINKS} navigate={navigationTo} />
			</div>
			<div>
				{HEADER_BUTTONS.map((button) => (
					<Button
						key={button.name}
						buttonName={button.name}
						buttonClick={() => navigationTo(button.route)}
						type="button"
					/>
				))}
			</div>
		</div>
	);
};

export default Header;

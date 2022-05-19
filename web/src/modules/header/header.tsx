import React from "react";
import styles from "../../styles/header.module.css";
import clsx from "../../utils/clsx";
import Button from "../button/button";
import Link from "../link/link";
import { HEADER_LINKS, HEADER_BUTTONS } from "src/global/headerLinks";

const Header: React.FC = () => {
	return (
		<div
			className={clsx(
				styles.header_flex,
				styles.header_justifyContent_between
			)}
		>
			<div>
				<Link
					links={HEADER_LINKS}
				/>
			</div>
			<div>
				{HEADER_BUTTONS.map((button) => (
					<Button key={button.name} buttonName={button.name} buttonClick={() => console.log('button clicked')} type="button" />
				))}
			</div>
		</div>
	);
};

export default Header;

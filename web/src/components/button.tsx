import React from "react";
import { ButtonProps } from "../types/button";
import styles from '../styles/button.module.css'

const Button: React.FC<ButtonProps> = ({
	buttonName,
	buttonClick,
	...props
}) => {
	return (
		<button {...props} onClick={buttonClick} className={styles.button}>
			{buttonName}
		</button>
	);
};

export default Button;

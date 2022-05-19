import React from "react";
import { ButtonProps } from "../../types/button";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	buttonClick,
	...props
}) => {
	return (
		<button {...props} onClick={buttonClick}>
			{buttonName}
		</button>
	);
};

export default Button;

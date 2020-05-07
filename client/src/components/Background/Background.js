import React from "react";
import { Gradient, Noise } from "./styles";

export const Background = ({ children, fill }) => {
	return (
		<Gradient>
			<Noise>{children}</Noise>
		</Gradient>
	);
};

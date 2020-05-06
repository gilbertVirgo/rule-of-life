import React from "react";
import {
	Indicator,
	Score,
	ValidationWrapper,
	Text,
	Sub,
	Input,
	Number,
} from "./styles";

export const Field = ({ index, label, placeholder, value, onChange }) => {
	const error = value.length > 60;

	return (
		<>
			<Number>{index}</Number>
			<Text>{label}</Text>
			<Input
				value={value}
				onChange={({ target }) => onChange(target.value)}
				placeholder={placeholder}
			/>
			<ValidationWrapper>
				<Indicator danger={error} />
				<Score danger={error}>{value.length}</Score>
				<Sub>/60 characters</Sub>
			</ValidationWrapper>
		</>
	);
};

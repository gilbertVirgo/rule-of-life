import React from "react";
import {
	Indicator,
	Colored,
	ValidationWrapper,
	Text,
	Sub,
	Input,
	Number,
} from "./styles";
import { isValidField } from "../../functions";

export const Field = React.forwardRef(
	({ index, label, error, value, onChange }, ref) => {
		const invalid = !isValidField(value);
		const [focused, setFocused] = React.useState(false);
		const [visited, setVisited] = React.useState(false);

		const handleFocus = () => setFocused(true);
		const handleBlur = () => {
			if (!visited) setVisited(true);
			setFocused(false);
		};
		const handleChange = ({ target }) => {
			if (!visited) setVisited(true);
			onChange(target.value);
		};

		return (
			<div style={{ display: 'flex' }}>
					<Number>{index}</Number>
					<div>
						<Text>{label}</Text>
						<Input
							ref={ref}
							onFocus={handleFocus}
							onBlur={handleBlur}
							value={value}
							onChange={handleChange}
							placeholder="Type your answer here..."
						/>
						<ValidationWrapper>
							{focused && (
								<React.Fragment>
									<Sub>
										<Indicator danger={visited && invalid} />
										<Colored danger={visited && invalid}>
											{value.length}
										</Colored>
								/60 characters
							</Sub>
								</React.Fragment>
							)}
							{invalid && visited && (
								<Sub>
									<Colored danger>
										Please make sure this field is filled out
										correctly
							</Colored>
								</Sub>
							)}
						</ValidationWrapper>
					</div>
				</div>
		);
	}
);

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
		const overflow = !isValidField(value);
		const [focused, setFocused] = React.useState(false);

		return (
			<>
				<Number>{index}</Number>
				<Text>{label}</Text>
				<Input
					ref={ref}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					value={value}
					onChange={({ target }) => onChange(target.value)}
					placeholder="Type your answer here..."
				/>
				<ValidationWrapper>
					{focused && (
						<React.Fragment>
							<Sub>
								<Indicator danger={overflow || error} />
								<Colored danger={overflow}>
									{value.length}
								</Colored>
								/60 characters
							</Sub>
							{overflow && (
								<Sub>
									<Colored danger>
										Please make sure this field is filled
										out correctly
									</Colored>
								</Sub>
							)}
						</React.Fragment>
					)}
				</ValidationWrapper>
			</>
		);
	}
);

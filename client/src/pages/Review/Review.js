import React from "react";

import Field from "../../components/Field";
import { Redirect } from "react-router-dom";
import { getPractices, isValidResults, setField } from "../../functions";
import Button from "../../components/Button";
import theme from "../../theme";
import { useHistory } from "react-router-dom";
import { Wrapper, Logo } from "../../components/styles";
import Background from "../../components/Background";
import { ButtonWrapper } from "./styles";

const Review = ({ results = [], onResultsChange }) => {
	const history = useHistory();

	const handleSubmit = () => {
		history.push("/results");
	};

	const handleFieldChange = (field) => {
		const updatedResults = setField(results, field);
		onResultsChange(updatedResults);
	};

	return isValidResults(results) ? (
		<Background>
			<Wrapper>
				<Logo />
				{getPractices(results).map(({ value, label }, index) => {
					return (
						<Field
							onChange={(value) =>
								handleFieldChange({ label, value })
							}
							value={value}
							label={label}
							index={index + 1}
							key={`review-field-${index}`}
						/>
					);
				})}
				<ButtonWrapper>
					<Button onClick={handleSubmit}>Create Rule of Life</Button>
				</ButtonWrapper>
			</Wrapper>
		</Background>
	) : (
		<Redirect to="/" />
	);
};

export default Review;

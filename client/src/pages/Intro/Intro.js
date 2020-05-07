import React from "react";
import { Wrapper, Logo, Subtitle } from "../../components/styles";
import Background from "../../components/Background";
import { TextWrapper, Title } from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

export const Intro = () => {
	const history = useHistory();

	const handleBegin = () => {
		history.push("/review");
	};

	return (
		<Background fill>
			<Wrapper>
				<Logo />
				<TextWrapper>
					<Title>
						Learn the unforced rhythms of grace. I won’t lay
						anything heavy or ill-fitting on you. Keep company with
						me and you’ll learn to live freely and lightly.
					</Title>
					<Subtitle borderless style={{ marginBottom: 40 }}>
						Matthew 11:28-30 (MSG)
					</Subtitle>
					<Button onClick={handleBegin}>Begin</Button>
				</TextWrapper>
			</Wrapper>
		</Background>
	);
};

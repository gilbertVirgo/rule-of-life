import styled from "styled-components";

export const Gradient = styled.div`
	width: 100%;
	min-height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: linear-gradient(131.86deg, #f6d365 0%, #fda085 100%);
	position: relative;
`;

export const Noise = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${require("../../assets/noise.png")});
	background-repeat: repeat;
	background-size: 375px 667px;

	display: flex;
	justify-content: center;
`;

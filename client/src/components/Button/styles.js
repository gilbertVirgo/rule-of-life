import styled from "styled-components";

export const Wrapper = styled.button`
	border: none;
	outline: none;
	background-color: white;
	padding: 8px 15px;
	border-radius: 2px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	display: block;
    margin: 0px auto;
`;

export const Text = styled.span`
	font-size: 14px;
	line-height: 30px;
	font-family: "neue-haas-grotesk-display", sans-serif;
	text-transform: uppercase;
	font-weight: 600;
	margin-right: 10px;
`;

export const Arrow = styled.img.attrs({
	src: require("../../assets/arrow.svg"),
})`
	width: 19px;
`;

export const DownArrow = styled.img.attrs({
	src: require("../../assets/down-arrow.svg"),
})`
	width: 9px;
`;

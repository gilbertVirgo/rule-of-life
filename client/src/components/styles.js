import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 51px 51px 51px 51px 51px;
	column-gap: 20px;
	padding: 15px;
	box-sizing: border-box;

	${breakpoint("lg")`
	width: 100%;
	max-width: 1072px;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 20px;
    `}
`;

export const Logo = styled.img.attrs({ src: require("../assets/logo.png") })`
	height: 32px;
	margin-top: 30px;
	margin-bottom: 80px;
	grid-column: 1/-1;
	justify-self: center;

	${breakpoint("lg")`
    height: 55px;
    `}
`;

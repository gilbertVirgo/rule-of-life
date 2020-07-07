import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

const lightSansSerif = `
    font-family: ${theme.font.family.sansSerif};
	font-weight: 300;
`;

export const Wrapper = styled.main`
	/*display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 20px;
	width: 100%;
	padding: 15px;
	box-sizing: border-box;*/

	${breakpoint("lg")`
	/*max-width: 1072px;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 20px;*/
    `}
`;

export const Logo = styled.img.attrs({ src: require("../assets/logo.png") })`
	/*height: 32px;
	margin-top: 30px;
	margin-bottom: 80px;
	grid-column: 1/-1;
	justify-self: center;*/

	margin: 30px auto 80px;
	display: block;
	height: auto;
    width: 50%;
    max-width: 150px;
`;

export const Heading = styled.h1`
	${lightSansSerif}
	font-size: 48px;
	line-height: 48px;
	margin-bottom: 30px;
	text-align: center;

	${breakpoint("lg")`
        text-align: left !important
        `}
`;

export const Subheading = styled.h3`
	${lightSansSerif}
	font-weight: 300;
	font-size: 24px;
	line-height: 30px;
	text-align: ${({ center }) => (center ? "center" : "left")};

	${breakpoint("lg")`
        text-align: left !important
        `}

	margin-bottom: 40px;

	> a {
		text-decoration: underline;
		color: inherit;
	}
`;

export const Title = styled.h2`
	${lightSansSerif}
	font-size: 30px;
	line-height: 30px;
	padding-bottom: 15px;
	border-bottom: 1px solid black;
	margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
	font-family: ${theme.font.family.sansSerif};
	font-weight: 600;
	font-size: 12px;
	line-height: 30px;
	color: ${theme.color.grey};
	padding-bottom: 1px;
	${({ borderless }) =>
		!borderless && `border-bottom: 1px solid ${theme.color.grey}`}
`;

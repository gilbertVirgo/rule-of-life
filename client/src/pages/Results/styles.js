import styled from "styled-components";
import theme from "../../theme";
import { Wrapper as DefaultWrapper } from "../../components/styles";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Background = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${theme.color.white};
`;

export const Wrapper = styled(DefaultWrapper)`
	&&& {
		grid-template-columns: 100%;
		max-width: 500px;

		${breakpoint("lg")`
        max-width: 100vh;
        grid-template-columns: 400px 400px;
        `}
	}
`;

const lightSansSerif = `
    font-family: ${theme.font.family.sansSerif};
	font-weight: 300;
`;

export const TextWrapper = styled.section`
	grid-column-start: 1;
	justify-self: center;

	${breakpoint("lg")`
        grid-column-start: 2;
        grid-column-end: 2;
    `}
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

export const DeviceWrapper = styled.div`
	width: 223px;
	display: block;
	margin: 0 auto;
	margin-bottom: 40px;
	justify-self: center;

	grid-column-start: 1;
`;

export const Title = styled.h2`
	${lightSansSerif}
	font-size: 30px;
	line-height: 30px;
	padding-bottom: 15px;
	border-bottom: 1px solid black;
	margin-bottom: 10px;
`;

export const DownloadButtonWrapper = styled.div`
	margin-bottom: 40px;
	display: flex;
	justify-content: center;
`;

export const Subtitle = styled.h4`
	font-family: ${theme.font.family.sansSerif};
	font-weight: 600;
	font-size: 12px;
	line-height: 30px;
	color: ${theme.color.grey};
	padding-bottom: 1px;
	border-bottom: 1px solid ${theme.color.grey};
`;

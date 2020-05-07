import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../../theme";
import { Wrapper as DefaultWrapper } from "../../components/styles";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Wrapper = styled(DefaultWrapper)`
	max-height: 0;
`;

export const TextWrapper = styled.div`
	text-align: center;

	grid-column-start: 1;
	grid-column-end: 6;
	margin-bottom: auto;

	${breakpoint("lg")`
    width: 335px;
    margin-left: auto;
    margin-right: auto;
        grid-column-start:3;
        grid-column-end: 9;
    `}
`;

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-style: normal;
	font-weight: 300;
	font-size: 36px;
	line-height: 42px;
	margin-bottom: 15px;
`;

import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const TextContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: calc(100% - 40px);
    margin: 0px 20px;

	${breakpoint("tablet")`
	width: 435px;
	margin: 0px auto;
    `}

	${breakpoint("lg")`
	width: 435px;
	margin: 0px auto;
    `}
`;

export const ButtonWrapper = styled.div`
	grid-column-start: 2;
	grid-column-end: 6;

	margin-bottom: 30px;

	${breakpoint("lg")`
        grid-column-start: 3;
    `}
`;

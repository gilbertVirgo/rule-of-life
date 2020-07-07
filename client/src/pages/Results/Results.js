import React from "react";

import format from "../../format";
import constants from "../../constants";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import { Logo, Heading, Subheading, Subtitle } from "../../components/styles";
import {
	Wrapper,
	Background,
	TextWrapper,
	RoundButton,
	DeviceWrapper,
	DownloadButtonWrapper,
} from "./styles";
import Radio from "../../components/Radio";
import Grid from "../../components/Grid";
import { useHistory, Redirect } from "react-router-dom";
import Mockup from "../../components/Mockup";
import theme from "../../theme";
import { isValidResults, isCompletedResults } from "../../functions";

export const Results = ({ results, onImageLoaded, image }) => {
	const history = useHistory();

	const [selectedTheme, setSelectedTheme] = React.useState("sunset");

	const colors = [
		{ name: 'beige', active: false },
		{ name: 'sunset', active: true },
		{ name: 'light', active: false },
		{ name: 'dark', active: false },
		{ name: 'night', active: false },
		{ name: 'blue', active: false },
		{ name: 'green', active: false },
		{ name: 'purple', active: false }
	];

	React.useEffect(() => {
		(async function () {
			let uri = await format.toImage({
				practices: results,
				theme: theme.themes[selectedTheme],
				constraints: constants.constraints["iPhone 8"],
			});

			onImageLoaded(uri);
		})();
	}, [selectedTheme]);

	const handleDownload = () => {
		history.push("/preview");
	};

	const handleColorSelected = (color) => {
		for (let i = 0; i < colors.length; i++) { 
			if (color.name == colors[i].name) {
				colors[i].active = true;
			} else { 
				colors[i].active = false;
			}
		}
	};

	/*if (!isValidResults(results) || !isCompletedResults(results) ) {
		return <Redirect to="/review" />;
	} else*/
	{
		return image ? (
			<Background>
				<Wrapper>
					<Logo />
					<TextWrapper>
						<Heading>Nice one!</Heading>
						<Subheading center>
							Your new <i>at home</i> rule of life is ready to
							download, choose a theme below and hit download
						</Subheading>
					</TextWrapper>
					<DeviceWrapper>
						<Mockup src={image} />
					</DeviceWrapper>
					<TextWrapper>
						<Subtitle>Choose your theme</Subtitle>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							{colors.map(color => { 
								return <div key={color.name} style={{ margin: '8px 3px', borderRadius: '100%', border: '2px solid #0085FF', boxSizing: 'border-box' }}>
									<RoundButton
									checked={selectedTheme === color}
									onChange={() => setSelectedTheme(color)}
									label="color"
									gradient="color"
									/>
								</div>
							})}
						</div>
						<DownloadButtonWrapper>
							<span className="only-mobile">
								<Button downArrow onClick={handleDownload}>
									Download
								</Button>
							</span>
							<a
								className="only-desktop"
								download="RuleOfLife.png"
								href={image}
							>
								<Button downArrow onClick={handleDownload}>
									Download
								</Button>
							</a>
						</DownloadButtonWrapper>
						<Subtitle>Next up</Subtitle>
						<Subheading>
							Share with your Pattern group so they can
							practically and prayerfully contend for you
						</Subheading>
						<Subtitle>And if you wanted to...</Subtitle>
						<Subheading>
							Stir the conversation by sharing with others who
							might find it helpful
						</Subheading>
						<Subtitle>Learn more about Pattern</Subtitle>
						<Subheading>
							Want to learn more about practices that shape us to
							be with Jesus, become like him and do what he did?
							Visit{" "}
							<a href="https://pattern.org.uk">pattern.org.uk</a>
						</Subheading>
					</TextWrapper>
				</Wrapper>
			</Background>
		) : (
			<Spinner title="Loading resources" />
		);
	}
};

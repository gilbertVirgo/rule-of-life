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
	DeviceFrames,
	DeviceWrapper,
	DownloadButtonWrapper
} from "./styles";
import Radio from "../../components/Radio";
import Grid from "../../components/Grid";
import { useHistory, Redirect } from "react-router-dom";
import Mockup from "../../components/Mockup";
import theme from "../../theme";
import { isValidResults, isCompletedResults } from "../../functions";
import './roundButton.css';

const devices = Object.keys(constants.devices).map(key => {
	constants.devices[key]["key"] = key;
	return constants.devices[key];
});

const exportTypes = Object.keys(constants.exportTypes).map(key => {
	constants.exportTypes[key]["key"] = key;
	return constants.exportTypes[key];
});

export const Results = ({ results, onImageLoaded, image }) => {
	const history = useHistory();

	const [selectedTheme, setSelectedTheme] = React.useState("sunset");
	const [selectedDevice, setSelectedDevice] = React.useState("iPhone 8");
	const [selectedExportType, setSelectedExportType] = React.useState("Lockscreen");

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

	const generateCanvasImage = (deviceName = "iPhone 8") => {
		return new Promise( async (resolve) => {
			let uri = await format.toImage({
				exportType: selectedExportType,
				practices: results,
				theme: theme.themes[selectedTheme],
				constraints: constants.devices[deviceName].constraints,
			});
			onImageLoaded(uri);
			resolve();
		});
	};

	React.useEffect(() => {
		(async function () {
			await generateCanvasImage();
		})();
	}, [selectedTheme]);

	const handleDownload = async () => {
		await generateCanvasImage(selectedDevice);
		history.push("/preview");
	};

	if (!isValidResults(results) || !isCompletedResults(results) ) {
		return <Redirect to="/review" />;
	} else
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
						<Subtitle>Choose your device</Subtitle>
						<DeviceFrames>
							{devices.map(obj => {
								let deviceStatus = selectedDevice == obj.key ? 'active' : '';
								return <div key={obj.key}
									className={`${deviceStatus}`}
									onClick={() => setSelectedDevice(obj.key)}>
									<div className="frame-container">
										<img src={obj.image} />
										<div className="frame-text">{obj.key}</div>
									</div>
								</div>
							})}
						</DeviceFrames>
					</TextWrapper>
					<TextWrapper>
						<Subtitle>Choose your theme</Subtitle>
						<div style={{ display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
							{colors.map(color => { 
								let buttonStatus = selectedTheme == color.name ? 'active' : '';
								return <div key={color.name}>
									<div>
										<div className={`${color.name} ${buttonStatus} round-btn`}>
											<RoundButton
												onClick={() => setSelectedTheme(color.name)}
											/>
										</div>
										{selectedTheme == color.name ? <div className="round-btn-text">{color.name}</div> : <div/>}
									</div>
								</div>
							})}
						</div>
					</TextWrapper>
					<TextWrapper>
						<Subtitle className="mt-30">Choose your image</Subtitle>
						<DeviceFrames>
							{exportTypes.map(obj => {
								let exportType = selectedExportType == obj.key ? 'active' : '';
								return <div key={obj.key}
									className={`${exportType}`}
									onClick={() => setSelectedExportType(obj.key)}>
									<div className="frame-container">
										<img src={obj.image} />
										<div className="frame-text">{obj.key}</div>
									</div>
								</div>
							})}
						</DeviceFrames>
					</TextWrapper>
					<TextWrapper>
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

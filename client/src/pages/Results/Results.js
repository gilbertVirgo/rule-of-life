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
	const [selectedDevice, setSelectedDevice] = React.useState("iPhone 6/7/8");
	const [selectedExportType, setSelectedExportType] = React.useState("Sharable");

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

	const generateCanvasImage = (deviceName = "iPhone 6/7/8", exportType = "Sharable" ) => {
		return new Promise( async (resolve) => {
			let uri = await format.toImage({
				exportType: exportType,
				practices: results,
				theme: theme.themes[selectedTheme],
				textColor: theme.textColor[selectedTheme],
				constraints: constants.devices[deviceName].constraints,
			});
			onImageLoaded(uri);
			image = uri;
			resolve();
		});
	};

	React.useEffect(() => {
		(async function () {
			await generateCanvasImage(undefined, selectedExportType);
		})();
	}, [selectedTheme, selectedExportType]);

	const handleDownload = async () => {
		if (selectedExportType == "Both") {
			await generateCanvasImage(selectedDevice, "Lockscreen");
			download(image, "Lockscreen");
			await generateCanvasImage(selectedDevice, "Sharable");
			download(image, "Sharable");
		} else { 
			await generateCanvasImage(selectedDevice, selectedExportType);
			download(image);
		}
		history.push("/preview");
	};

	let download = (imageToProcess, fileName = "") => {
		let base64 = imageToProcess;
		let uriContent = URL.createObjectURL(b64toBlob(base64));
		let link = document.createElement('a');
		link.setAttribute('href', uriContent);
		if (fileName) { 
			fileName = "-" + fileName;
		}
		link.setAttribute('download', `RuleOfLife${fileName}.png`);
		let event = new MouseEvent('click');
		link.dispatchEvent(event);
	};

	function b64toBlob(dataURI) {

		var byteString = atob(dataURI.split(',')[1]);
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);

		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], { type: 'image/png' });
	}

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

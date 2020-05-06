import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from "./pages/Results";
import Start from "./pages/Start";
import { ThemeProvider } from "styled-components";
import Review from "./pages/Review/Review";
import FontFaceObserver from "fontfaceobserver";

import theme from "./theme";
import fields from "./fields";
import Spinner from "./components/Spinner";
import Preview from "./pages/Preview";

export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);
	const [results, setResults] = React.useState(fields);
	const [image, setImage] = React.useState(null);

	const handleResultsChange = (updatedResults) => setResults(updatedResults);

	React.useEffect(() => {
		(async function () {
			const fonts = [
				{ name: "neue-haas-grotesk-display", weight: 300 },
				{ name: "neue-haas-grotesk-display", weight: 500 },
				{ name: "neue-haas-grotesk-display", weight: 600 },
				{ name: "starling", weight: 700 },
			].map(({ name, weight }) => new FontFaceObserver(name, { weight }));

			for (const font of fonts) {
				await font.load();
			}

			setFontsLoaded(true);
		})();
	}, []);

	return (
		<Router>
			<ThemeProvider theme={theme}>
				{!fontsLoaded ? (
					<Spinner title="Loading fonts" />
				) : (
					<Switch
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
					>
						<Route
							path="/results"
							render={() => (
								<Results
									results={results}
									image={image}
									onImageLoaded={setImage}
								/>
							)}
						/>
						<Route
							exact
							path="/review"
							render={() => (
								<Review
									results={results}
									onResultsChange={handleResultsChange}
								/>
							)}
						/>
						<Route
							path="/start"
							render={() => (
								<Start
									results={results}
									onResultsChange={handleResultsChange}
								/>
							)}
						/>
						<Route
							path="/preview"
							render={() => <Preview image={image} />}
						/>
					</Switch>
				)}
			</ThemeProvider>
		</Router>
	);
}

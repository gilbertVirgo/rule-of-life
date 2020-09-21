import Canvas from "./canvas";

const format = {
	renderGradient: async (canvas, theme) => {
		await canvas.gradient(theme);
	},

	renderLogo: async (canvas, renderLightLogo=false) => {
		const width = 32;
		const height = 32;

		await canvas.image(
			renderLightLogo ? require("./assets/logo-white.png") : require("./assets/logo.png"),
			canvas.canvasElement.width / (canvas.scale * 2) - width / 2,
			20,
			width,
			height,
			renderLightLogo ? {} : { blendMode: "multiply" }
		);
	},

	renderFooter: (canvas) => {
		canvas.text("Be with Jesus. Become like Jesus. Do what Jesus did.", {
			x: canvas.canvasElement.width / canvas.scale / 2,
			y: canvas.canvasElement.height / canvas.scale - 28,
			fontFamily: "neue-haas-grotesk-display",
			fontWeight: 600,
			fontSize: 9,
			lineHeight: 12,
			textAlign: "center",
		});
	},

	renderPractices: (canvas, sections, exportType) => {
		let offsetTop = 78,
			offsetLeft = 20;
		
		let titleSize = 24,
			textSize = 12,
			spaceBetween = 45;

		if (exportType == "Lockscreen") { 
			offsetTop += 120;
			titleSize = 24 / 1.6;
			textSize = 12 / 1.6;
			spaceBetween = 45 / 1.6;
		}
		
		sections.forEach(({ label, practices }) => {
			canvas.text(label, {
				x: offsetLeft,
				y: offsetTop,
				fontFamily: "starling, serif",
				fontWeight: 700,
				fontSize: 14,
				lineHeight: 17,
			});

			offsetTop += 19;

			practices.forEach(({ label, value }) => {
				// Human Resources
				canvas.hr(offsetLeft, offsetTop);
				offsetTop += 6;

				// label
				canvas.text(label, {
					x: offsetLeft,
					y: offsetTop,
					fontFamily: "neue-haas-grotesk-display, sans-serif",
					fontWeight: 300,
					fontSize: titleSize,
					lineHeight: 27,
				});

				// Value
				canvas.text(value, {
					x: 192,
					y: offsetTop,
					maxWidth: 162,
					fontFamily: "neue-haas-grotesk-display, times",
					fontWeight: 500,
					fontSize: textSize,
					lineHeight: 14,
				});

				offsetTop += spaceBetween;
			});

			offsetTop += 5;
		});
	},

	toImage: async ({ exportType, practices, theme, textColor, constraints }) => {
		const [width, height] = constraints;

		const canvas = new Canvas().init(width, height);
		await format.renderGradient(canvas, theme);
		await format.renderLogo(canvas, textColor == "white");
		canvas.context.fillStyle = textColor;
		canvas.context.strokeStyle = textColor;
		format.renderPractices(canvas, practices, exportType);
		format.renderFooter(canvas);

		return canvas.canvasElement.toDataURL("image/png", 1);
	},
};

export default format;

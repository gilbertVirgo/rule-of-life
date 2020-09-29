const androidFrame = require("./assets/frames/android-frame.png");
const iphoneFrame = require('./assets/frames/iphone-frame.png');
const iphoneXFrame = require('./assets/frames/iphone-x-frame.png');
const lockscreenFrame = require('./assets/frames/lockscreen-frame.svg');
const sharableFrame = require('./assets/frames/sharable-frame.svg');
const bothFrame = require('./assets/frames/sharable-frame.svg');

const constants = {
	devices: {
		"Android": {
			constraints: [375, 667],
			image: androidFrame,
			ratio: 1.4
		},
		"iPhone 6/7/8": {
			constraints: [375, 667],
			image: iphoneFrame,
			ratio: 1.4
		},
		"iPhone 8+": {
			constraints: [414, 736],
			image: iphoneFrame,
			ratio: 1.15
		},
		"iPhone X": {
			constraints: [375, 812],
			image: iphoneXFrame,
			ratio: 0.95
		},
		"iPhone 11 Pro Max": {
			constraints: [414, 896],
			image: iphoneXFrame,
			ratio: 0.8
		},
		"iPhone SE": {
			constraints: [320, 568],
			image: iphoneFrame,
			ratio: 1.95
		}
	},
	exportTypes: {
		"Lockscreen": {
			image: lockscreenFrame
		},
		"Sharable": {
			image: sharableFrame
		},
		"Both": {
			image: bothFrame
		}
	}
};

export default constants;

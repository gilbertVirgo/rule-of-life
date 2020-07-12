const androidFrame = require("./assets/frames/android-frame.png");
const iphoneFrame = require('./assets/frames/iphone-frame.png');
const iphoneXFrame = require('./assets/frames/iphone-x-frame.png');
const lockscreenFrame = require('./assets/frames/lockscreen-frame.png');
const sharableFrame = require('./assets/frames/sharable-frame.png');
// const lockscreenSharebleFrame = require('./assets/frames/lockscreen-sharable-frame.png');

const constants = {
	devices: {
		"Android": {
			constraints: [375, 667],
			image: androidFrame
		},
		"iPhone 8": {
			constraints: [375, 667],
			image: iphoneFrame
		},
		"iPhone 8+": {
			constraints: [414, 736],
			image: iphoneFrame
		},
		"iPhone X": {
			constraints: [375, 812],
			image: iphoneXFrame
		},
		"iPhone 11 Pro Max": {
			constraints: [414, 896],
			image: iphoneXFrame
		},
		"iPhone SE": {
			constraints: [320, 568],
			image: iphoneFrame
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
			image: sharableFrame
		}
	}
};

export default constants;

import 'react-native-gesture-handler';
import 'react-native-console-time-polyfill';
import { AppRegistry } from 'react-native';
import { name as appName, share as shareName } from './app.json';
import { buildId } from './rox_labs.json';
import roxLabsStore from './roxLabsStore';

if (__DEV__) {
	require('./app/ReactotronConfig');
} else {
	console.log = () => {};
	console.time = () => {};
	console.timeLog = () => {};
	console.timeEnd = () => {};
	console.warn = () => {};
	console.count = () => {};
	console.countReset = () => {};
	console.error = () => {};
	console.info = () => {};
}
async function getRoxLabsApiData() {
	const response = await fetch('https://roxchatapp.roxlabs.tech/config.json');
	const json = await response.json();
	return json;
}
// roxLabsStore.removeItem('rlServerURL');
getRoxLabsApiData().then(response => {
	if (buildId > response.prodBuildID) {
		console.log('using dev url');
		roxLabsStore.setStringAsync('rlServerURL', response.dev_url);
	}
	if (buildId <= response.prodBuildID) {
		console.log('using prod url');
		roxLabsStore.setStringAsync('rlServerURL', response.prod_url);
	}
});
AppRegistry.registerComponent(appName, () => require('./app/index').default);
AppRegistry.registerComponent(shareName, () => require('./app/share').default);

// For storybook, comment everything above and uncomment below
// import './storybook';

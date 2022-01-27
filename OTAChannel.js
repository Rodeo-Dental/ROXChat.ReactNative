import React from 'react';
import { Text } from 'react-native';
import appConfig from './app.json';

const OTAChannel = () => {
	const channel = appConfig.activeChannel;
	let channelDisplay = 'BETA';
	if (channel === 'prod') {
		channelDisplay = 'Official';
	}
	if (channel == null) {
		channelDisplay = '?';
	}

	return <Text>{channelDisplay}</Text>;
};

export default OTAChannel;

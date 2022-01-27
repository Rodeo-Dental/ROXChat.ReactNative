import React from 'react';
import codePush from 'react-native-code-push';
import { Text } from 'react-native';
import { getAppVersion } from './OTAMeta';
import appConfig from './app.json';

class OTAPkgVersion extends React.Component {
	componentDidMount() {
		codePush.getUpdateMetadata().then(metadata => {
			this.setState({ label: metadata.label, version: metadata.appVersion, description: metadata.description });
		});
		this.setState({ appVersionOTA: getAppVersion });
		const channel = appConfig.activeChannel;
		let channelDisplay = 'BETA';
		if (channel === 'prod') {
			channelDisplay = 'Official';
		}
		if (channel == null) {
			channelDisplay = '?';
		}
		this.setState({ channel: channelDisplay });
	}

	render() {
		return (
			<Text>
				{this.state.appVersionOTA} - {this.state.channel}
			</Text>
		);
	}
}

export default OTAPkgVersion;

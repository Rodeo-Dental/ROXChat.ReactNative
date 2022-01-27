import React from 'react';
import codePush from 'react-native-code-push';
import { Text } from 'react-native';
import { getAppVersion } from './OTAMeta';

class OTAPkgVersion extends React.Component {
	componentDidMount() {
		codePush.getUpdateMetadata().then(metadata => {
			this.setState({ label: metadata.label, version: metadata.appVersion, description: metadata.description });
		});
		this.setState({ appVersionOTA: getAppVersion });
	}

	render() {
		return <Text>{this.state.appVersionOTA}</Text>;
	}
}

export default OTAPkgVersion;

import React from 'react';
import { Text } from 'react-native';
import OTAVersion from './OTAVersion';
import OTAChannel from './OTAChannel';

const OTAVersionAndChannel = () => (
	<Text>
		<OTAVersion />: <OTAChannel />
	</Text>
);

export default OTAVersionAndChannel;

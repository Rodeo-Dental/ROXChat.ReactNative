import React from 'react';
import { Text } from 'react-native';
import { useOTAVersion } from './OTAMeta';

const OTAVersion = () => {
	const { appVersion } = useOTAVersion();

	return <Text>{appVersion}</Text>;
};

export default OTAVersion;

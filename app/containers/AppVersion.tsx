import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { themes } from '../constants/colors';
import sharedStyles from '../views/Styles';
import I18n from '../i18n';
import OTAVersion from '../../OTAVersion';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	text: {
		...sharedStyles.textRegular,
		fontSize: 13
	},
	bold: {
		...sharedStyles.textSemibold
	}
});

const AppVersion = React.memo(({ theme }: { theme: string }) => (
	<View style={styles.container}>
		<Text style={[styles.text, { color: themes[theme].auxiliaryText }]}>
			{I18n.t('Version_no', { version: '' })}
			<Text style={styles.bold}>
				<OTAVersion />
			</Text>
		</Text>
	</View>
));

export default AppVersion;

/**
 * @format
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

export const RootComponent = () => (
	<NativeBaseProvider>
		<App />
	</NativeBaseProvider>
)

AppRegistry.registerComponent(appName, () => RootComponent);

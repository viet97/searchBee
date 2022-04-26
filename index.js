/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MyAppContainer from './src/container/App';

AppRegistry.registerComponent(appName, () => MyAppContainer);

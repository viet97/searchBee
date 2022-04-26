import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const infoSystem = {
  bundleId: DeviceInfo.getBundleId(),
  model: DeviceInfo.getModel(),
  buildNumber: DeviceInfo.getBuildNumber(),
  buildVersion: DeviceInfo.getVersion(),
  systemVersion: DeviceInfo.getSystemVersion(),
};


const CONFIG_ANDROID_TEST = {
  deviceName:
    'Mobile android - ' +
    DeviceInfo.getBrand() +
    '(' +
    DeviceInfo.getSystemVersion() +
    ') - ' +
    DeviceInfo.getModel(),
  deviceId: DeviceInfo.getUniqueId(),
  platform: Platform.OS,
  ...infoSystem,
};

const CONFIG_IOS_TEST = {
  deviceName:
    'Mobile iOS - ' +
    DeviceInfo.getBrand() +
    '(' +
    DeviceInfo.getSystemVersion() +
    ') - ' +
    DeviceInfo.getModel(),
  deviceId: DeviceInfo.getUniqueId(),
  platform: Platform.OS,
  ...infoSystem,
};

export const getConfigDevice = () => {
  switch (Platform.OS) {
    case 'android':
      return CONFIG_ANDROID_TEST;
    // return CONFIG_ANDROID_TEST;
    case 'ios':
      return CONFIG_IOS_TEST;
    default:
      return CONFIG_ANDROID_TEST;
  }
};

import { getConfigDevice } from './ConfigDevice';

const appInfo = {
  platform: getConfigDevice().platform,
  model: getConfigDevice().model,
  systemVersion: getConfigDevice().systemVersion,
  deviceId: getConfigDevice().deviceId,
  deviceName: getConfigDevice().deviceName,
  // code_push_staging_ios: 'me5haivg2s3goDMzwTY5O0pmKnBNbY81soIvd',
  // code_push_staging_android: 'YUedt-TJyRGHeyj5AZopakjKCj-ajhW8eTg0e',
};

export default class AppInfoManager {
  static getInstance(store) {
    if (!this._instance) {
      this._instance = new AppInfoManager(store);
    }
    return this._instance;
  }
  static clear() {
    if (this._instance) {
      delete this._instance;
    }
  }
  constructor(store) {
    this.store = store;
    this._init();
  }

  setStore = (store) => {
    if (!store) {
      return;
    }
    this.store = store;
  };

  getStore = () => {
    return this.store;
  };

  isLogin = () => {
    if (!this.store) { return; }

  }

  isSubBuyer = () => {
    const sub_buyer = this.getUserInfo()?.sub_buyer
    return sub_buyer;
  }

  _init() {

  }

  getDeviceName() {
    return getConfigDevice().deviceName;
  }

  getDeviceId() {
    return getConfigDevice().deviceId;
  }

  getAppInfo() {
    return appInfo;
  }

  getDeploymentKey = () => {
    const { IS_ANDROID } = require('./utils/DeviceUtil');

    let deploymentKey = '';
    if (IS_ANDROID) {
      deploymentKey = this.getAppInfo().code_push_staging_android;
    } else {
      deploymentKey = this.getAppInfo().code_push_staging_ios;
    }
    return deploymentKey;
  }
}

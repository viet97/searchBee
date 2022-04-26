import AsyncStorage from '@react-native-async-storage/async-storage';
import { isString } from 'lodash';

export const DEFINE_KEY = {

};

const isExist = async key => {
  try {
    const allKey = await AsyncStorage.getAllKeys();
    for (let index = 0; index < allKey.length; index++) {
      const element = allKey[index];
      if (element === key) {
        return true;
      }
    }
    return false;
  } catch (error) {
    return false;
  }
};

const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (e) {
    return '';
  }
};

const setItem = async (key, value) => {
  try {
    if (isString(value)) {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    // saving error
  }
};

const clear = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
};

const removeItem = async key => {
  return await AsyncStorage.removeItem(key);
};

export const LocalStorage = {
  setItem,
  getItem,
  clear,
  removeItem,
  DEFINE_KEY,
  isExist,
};

export default LocalStorage;

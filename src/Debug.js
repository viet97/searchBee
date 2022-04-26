import { format } from 'date-fns';
import { nowCustom } from './utils/Util';
const { debug } = require('./config/env')

const formatString = 'HH:mm:ss.SSS';

export const myLog = (...args) => {
  if (!debug) {
    return;
  }
  console.log(format(nowCustom(), formatString) + ' : ', ...args);
};

export const myLogThrow = (...args) => {
  console.log(format(nowCustom(), formatString) + " : ", ...args);
};

export const logTracker = (level = 0, ...args) => {
  if (!debug) {
    return;
  }
  console.log(format(nowCustom(), formatString) + ' : ', ...args);
};

const Debug = {
  myLog,
  logTracker,
};

export default Debug;

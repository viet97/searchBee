import { myLog } from '../Debug';

const TAG = 'Util : ';

function convertToNumber(item) {
  if (item === null || item === undefined) {
    return 0;
  }
  const number = Number(item);
  if (number === NaN) {
    return 0;
  }
  return number;
}

export const parseJSON = (opts, defaults) => {
  if (opts !== null && typeof opts === 'object') {
    return opts;
  }
  defaults = defaults || null;
  try {
    defaults = JSON.parse(opts);
  } catch (e) {
    myLog(TAG, e);
  }
  return defaults;
};

export const nowCustom = () => {
  return Date.now();
};

const Util = {
  convertToNumber,
};

export default Util;

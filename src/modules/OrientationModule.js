import Orientation, {
  PORTRAIT,
  LANDSCAPE,
  LANDSCAPE_LEFT,
  LANDSCAPE_RIGHT,
} from 'react-native-orientation-locker';

const OrientationModule = {
  PORTRAIT,
  LANDSCAPE,
  LANDSCAPE_LEFT,
  LANDSCAPE_RIGHT,
  orientation: PORTRAIT,
  deviceOrientation: PORTRAIT,
  lockToPortrait: () => {
    Orientation.lockToPortrait();
  },
  lockToLandscape: () => {
    Orientation.lockToLandscape();
  },
  lockToLandscapeLeft: () => {
    Orientation.lockToLandscapeLeft();
  },
  lockToLandscapeRight: () => {
    Orientation.lockToLandscapeRight();
  },
  getAutoRotate: cb => {
    Orientation.getAutoRotateState(isAuto => {
      cb && cb(isAuto);
    });
  },
  isPortrait: () => OrientationModule.orientation === PORTRAIT,
  isLandscape: () =>
    OrientationModule.orientation === LANDSCAPE ||
    OrientationModule.orientation === LANDSCAPE_LEFT ||
    OrientationModule.orientation === LANDSCAPE_RIGHT,
  isLandscapeLeft: () => {
    OrientationModule.orientation === LANDSCAPE_LEFT;
  },
  isLandscapeRight: () => {
    OrientationModule.orientation === LANDSCAPE_RIGHT;
  },
};

export default OrientationModule;

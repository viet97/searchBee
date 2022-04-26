import { REQUEST_TYPE, REQUEST_SUBTYPE } from '../../actions/ActionTypes';

const initState = {

};

export default (state = initState, action) => {
  switch (action.key) {
    case REQUEST_TYPE.UPDATE_BUYER:
      switch (action.subType) {
        case REQUEST_SUBTYPE.SUCCESS:
          const newProfile = action?.data?.data
          return { ...state, profile: newProfile }
        default:
          return state;
      }
    default:
      return state;
  }
};

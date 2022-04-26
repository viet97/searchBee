
import User from './User';
import { combineReducers } from 'redux';

export const listReducer = {
  User,
};

const MainListReducers = combineReducers(
  {
    ...listReducer,
  }
);


const root = MainListReducers;

export default root;

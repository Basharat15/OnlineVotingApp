import {combineReducers} from 'redux';
import resultReducer from './result/resultReducer';

const reducers = combineReducers({
  result: resultReducer,
});

export const RootReducer = (state, action) => {
  //Reset Global state
  // if (action.type === '[Auth] LOGOUT_USER') {
  //   return reducers(undefined, action);
  // }

  return reducers(state, action);
};

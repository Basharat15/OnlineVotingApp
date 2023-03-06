import {RESULT_TYPES} from './resultAction';

const initialState = {
  resultPosted: false,
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESULT_TYPES.RESULT:
      return {
        ...state,
        resultPosted: action.payload,
      };
    default:
      return state;
  }
};

export default resultReducer;

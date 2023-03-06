export const RESULT_TYPES = {
  RESULT: 'RESULT',
};

export const setResult = payload => {
  return dispatch => {
    return dispatch({
      type: RESULT_TYPES.RESULT,
      payload,
    });
  };
};

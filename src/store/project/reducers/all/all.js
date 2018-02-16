import authorsActions from '../../actions';

const all = (state = {}, action) => {
  switch (action.type) {
    case authorsActions.GET_AUTHORS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default all;

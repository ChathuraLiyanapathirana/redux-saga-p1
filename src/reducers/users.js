const initialState = {
  loading: false,
  data: null,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_USERS_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default users;

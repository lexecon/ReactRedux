import { REQUEST_FLIGHT, RECEIVE_FLIGHT } from '../actions/actions';

const initialState = {
  items: [],
  isLoad: false,
};

const flights = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FLIGHT:
      return Object.assign({}, state, {
        isLoad: false,
      });
    case RECEIVE_FLIGHT:
      return Object.assign({}, state, {
        items: action.flights,
        isLoad: true,
      });
    default:
      return state;
  }
};

export default flights;

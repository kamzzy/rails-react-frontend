import axios from 'axios';

const RANDOM_GREETING = 'greeting/RANDOM_GREETING';
const baseurl = 'http://localhost:3002/greetings';

const initialState = [];

export const randomGreeting = () => async (dispatch) => {
  const response = await axios.get(baseurl);
  dispatch({
    type: RANDOM_GREETING,
    payload: response.data,
  });
};

// Reducer
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;

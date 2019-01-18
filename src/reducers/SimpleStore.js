import {HEALTH_CHECK} from "../constants/Constant";

const initialState = { requestCount : 0,  responseText : "", img : ""};

const simpleStore = (state = initialState, action) => {

  switch (action.type) {
    case HEALTH_CHECK: {
        console.log(action);
        state.type = action.type;
        state.requestCount = action.requestCount;
        state.responseText = action.responseText;
        state.img = action.img;
        return state;
    }
    default:
      console.log(action);
      return state;
  }

};

export default simpleStore
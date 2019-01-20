import {HEALTH_CHECK, SET_HISTORY, TOGGLE_HISTORY} from "../constants/Constant";

const initialState = { requestCount : 0, failedRequestCount : 0, responseText : "", img : "", history : [], isDisplayHistory: false};

const simpleStore = (state = initialState, action) => {

    switch (action.type) {
        case HEALTH_CHECK: {
            console.log(action);
            state.type = action.type;
            state.failedRequestCount = action.failedRequestCount;
            state.requestCount = action.requestCount;
            state.responseText = action.responseText;
            state.img = action.img;
            return state;
        }
        case SET_HISTORY: {
            console.log(action);
            state.history = action.history;
            return state;
        }
        case TOGGLE_HISTORY: {
            console.log(action);
            state.isDisplayHistory = action.isDisplayHistory;
            return state;
        }
    default:
        console.log(action);
        return state;
  }

};

export default simpleStore
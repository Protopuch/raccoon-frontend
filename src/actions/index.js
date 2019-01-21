import * as actions from '../constants/Constant'

export const healthCheckRequestRegister = (requestCount, failedRequestCount, responseText, img) => ( { type : actions.HEALTH_CHECK, requestCount : requestCount, failedRequestCount : failedRequestCount, responseText : responseText, img : img } );
export const setHealthCheckHistory = (history) => ( { type : actions.SET_HISTORY, history : history } );
export const toogleHistoryVisiable = (isDisplayHistory) => ( {type : actions.TOGGLE_HISTORY, isDisplayHistory : isDisplayHistory} );
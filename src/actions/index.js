import * as actions from '../constants/Constant'

export const healthCheckRequestRegister = (requestCount, failedRequestCount, responseText, img) => ( {type : actions.HEALTH_CHECK, requestCount : requestCount, failedRequestCount : failedRequestCount, responseText : responseText, img : img} );

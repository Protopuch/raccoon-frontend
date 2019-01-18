import * as actions from '../constants/Constant'

export const healthCheckRequestRegister = (requestCount, responseText, img) => ( {type : actions.HEALTH_CHECK, requestCount : requestCount, responseText : responseText, img : img} );

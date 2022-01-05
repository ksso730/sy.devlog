import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// connectRouter(history) 로 명명된 router로 계속 사용한다.
const rootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
    });
}

export default rootReducer;
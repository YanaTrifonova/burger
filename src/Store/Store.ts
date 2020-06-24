import {rootReducer} from "../Reducer/RootReducer"
import {applyMiddleware, createStore} from "redux";
import loggerMiddleware from "../Middleware/LoggerMiddleware";

export default function configureStore() {
    const middlewares = [loggerMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    return createStore(rootReducer, undefined, middlewareEnhancer);
}
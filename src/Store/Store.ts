import { combineReducers, createStore, applyMiddleware } from "redux";
import {BurgerReducer} from '../Reducer/BurgerReducer';
import loggerMiddleware from "../Middleware/LoggerMiddleware";

const rootReducer = combineReducers({
    burger: BurgerReducer,
});

const middlewares = [loggerMiddleware] ;
const middlewareEnhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, undefined, middlewareEnhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
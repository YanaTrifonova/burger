import { combineReducers, createStore, applyMiddleware } from "redux";
import {BurgerReducer} from '../Reducer/BurgerReducer';
import loggerMiddleware from "../Middleware/LoggerMiddleware";
import {FancyLoggerReducer} from "../Reducer/FancyLoggerReducer";

const rootReducer = combineReducers({
    burger: BurgerReducer,
    fancyLogger: FancyLoggerReducer,
});

const middlewares = [loggerMiddleware] ;
const middlewareEnhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, undefined, middlewareEnhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
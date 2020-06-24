import {combineReducers} from "redux";
import {BurgerReducer} from "./BurgerReducer";
import {BurgerState} from "../State/BurgerState";

export const rootReducer = combineReducers({
    burger: BurgerReducer,
})

export type RootState = ReturnType<typeof rootReducer>
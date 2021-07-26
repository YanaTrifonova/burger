import {FancyLoggerState} from '../State/FancyLoggerState';
import {InputWatcherAction} from "../Actions/InputWatcherAction";

const initialStateValue: string[] = [];

const initialState: FancyLoggerState = {
    text: initialStateValue,
}

export function FancyLoggerReducer(state = initialState, action: InputWatcherAction): FancyLoggerState {
    switch (action.type) {
        case "INPUT_CHANGED" : {
            return {
                text: [action.text, ...state.text]
            };
        }

        default:
            return state;
    }
}

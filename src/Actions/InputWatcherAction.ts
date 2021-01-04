import {Action} from "redux";

export interface InputWatcherAction extends Action{
    type: string,
    text: string
}

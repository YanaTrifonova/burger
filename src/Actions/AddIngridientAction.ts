import {Action} from "redux";

export interface AddIngredientAction extends Action {
    type: string,
    ingredient: string
}

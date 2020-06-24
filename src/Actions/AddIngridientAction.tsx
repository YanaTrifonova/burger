import {Action} from "redux";

export interface AddIngredientAction extends Action{
    type: string,
    ingredient: string
}

export function addIngredient(ingredient : string) : AddIngredientAction {
    return {
        type: 'ADD_INGREDIENT',
        ingredient: ingredient
    }
}
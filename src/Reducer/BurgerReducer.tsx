import {Queue} from 'queue-typescript'
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import {RemoveAllIngredientsAction} from "../Actions/RemoveAllIngredientsAction";
import {BurgerState} from "../State/BurgerState";

const initialStateValue = new Queue<string>();

const initialState: BurgerState = {
    ingredients: initialStateValue,
}

export function BurgerReducer(state = initialState, action: AddIngredientAction | RemoveAllIngredientsAction): BurgerState {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            let newQueue = new Queue<string>();
            while (state.ingredients.length !== 0) {
                newQueue.enqueue(state.ingredients.dequeue());
            }
            if ("ingredient" in action) {
                newQueue.enqueue(action.ingredient);
            }
            return {ingredients: newQueue};
        case 'REMOVE_ALL_INGREDIENTS':
            return {ingredients: new Queue<string>()}
        default:
            return state;
    }
}
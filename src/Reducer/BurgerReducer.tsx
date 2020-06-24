import {Queue} from 'queue-typescript'
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import {BurgerState} from "../State/BurgerState";

const initialStateValue = new Queue<string>('TopBun', 'Tomato', 'Cheese', 'MeatPatty', 'BottomBun');

const initialState : BurgerState = {
    ingredients: initialStateValue,
}

export function BurgerReducer(state = initialState, action: AddIngredientAction): BurgerState {
    switch (action.ingredient) {
        case 'Tomato' :
            state.ingredients.enqueue('Tomato');
            return state;

        default:
            return state;
    }
}
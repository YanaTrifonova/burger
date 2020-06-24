import {Queue} from "queue-typescript";

export interface BurgerState {
    ingredients: Queue<string>
}
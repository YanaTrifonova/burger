import * as React from 'react';
import inputFieldParser from "../Components/InputFieldParser";
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import {BurgerState} from "../State/BurgerState";
import {connect, ConnectedProps} from "react-redux";
import {CombinedState, Store} from "redux";
import {RemoveAllIngredientsAction} from "../Actions/RemoveAllIngredientsAction";
import {FancyLoggerState} from "../State/FancyLoggerState";
import {InputWatcherAction} from "../Actions/InputWatcherAction";

import './inputField.css'

const mapState = (state: BurgerState, fancyLogger: FancyLoggerState) => ({
    ingredients: state.ingredients,
    text: fancyLogger.text
})

const mapDispatch = {
    addIngredient: (ingredient: string) => ({type: 'ADD_INGREDIENT', ingredient: ingredient}),
    removeAllIngredients: () => ({type: 'REMOVE_ALL_INGREDIENTS'}),
    inputWatcher: (text: string) => ({type: "INPUT_CHANGED", text: text})
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux &
    {
        value: string;
        store: Store<CombinedState<{ fancyLogger: FancyLoggerState }>, InputWatcherAction> | Store<CombinedState<{ burger: BurgerState }>, AddIngredientAction | RemoveAllIngredientsAction>
    }

interface State {
    value: string;
}

class InputField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: props.value,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            value: event.currentTarget.value
        })
        this.props.removeAllIngredients();

        this.props.inputWatcher(event.currentTarget.value.toLocaleLowerCase());

        inputFieldParser(event.currentTarget.value.toLocaleLowerCase()).forEach((elem) => {
            this.props.addIngredient(elem);
        });
    };

    render(): JSX.Element {
        return (
            <input
                type='text'
                className="input"
                value={this.state.value}
                placeholder={"Hamburger"}
                onChange={this.handleChange}/>
        );
    }
}

export default connector(InputField);
import * as React from 'react';
import inputFieldParser from "../Components/InputFieldParser";
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import {BurgerState} from "../State/BurgerState";
import {connect, ConnectedProps} from "react-redux";
import {CombinedState, Store} from "redux";
import {RemoveAllIngredientsAction} from "../Actions/RemoveAllIngredientsAction";


const mapState = (state: BurgerState) => ({
    ingredients: state.ingredients
})

const mapDispatch = {
    addIngredient: (ingredient: string) => ({type: 'ADD_INGREDIENT', ingredient: ingredient}),
    removeAllIngredients: () => ({type: 'REMOVE_ALL_INGREDIENTS'})
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux &
    {
        value: string;
        store: Store<CombinedState<{ burger: BurgerState }>, AddIngredientAction | RemoveAllIngredientsAction>
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

        inputFieldParser(event.currentTarget.value.toLocaleLowerCase()).forEach((elem) => {
            this.props.addIngredient(elem);
        });
    };

    render(): JSX.Element {
        return (
            <input
                type='text'
                value={this.state.value}
                placeholder={"Hamburger"}
                onChange={this.handleChange}/>
        );
    }
}

export default connector(InputField);
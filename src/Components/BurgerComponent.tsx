import {BurgerState} from "../State/BurgerState";
import React from "react";
import {CombinedState, Store} from "redux";
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import TopBun from '../Images/TopBun.png';
import Tomato from '../Images/Tomato.png';
import Cheese from '../Images/Cheese.png';
import MeatPatty from '../Images/MeatPatty.png';
import BottomBun from '../Images/BottomBun.png';
import EmptyBurger from '../Images/EmptyBurger.jpg';
import ReduxState from '../Store/Store';

import './BurgerComponent.css'
import {RemoveAllIngredientsAction} from "../Actions/RemoveAllIngredientsAction";

interface Props {
    store: Store<CombinedState<{ burger: BurgerState }>, AddIngredientAction | RemoveAllIngredientsAction>,
}

interface State {
    burgerParts: string[];
}

class Burger extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {burgerParts: ReduxState.getState().burger.ingredients.toArray()};
        this.props.store.subscribe(this.fetchState.bind(this));
    }

    fetchState = () => {
        this.setState({burgerParts: ReduxState.getState().burger.ingredients.toArray()})
    }

    render(): JSX.Element {
        let key = 0;
        let burgerElements;

        if (this.state.burgerParts.length === 0) {
            burgerElements = <img src={EmptyBurger} alt={'EmptyBurger'} key={key}/>;
        } else {
            burgerElements = this.state.burgerParts.map((ingredient) => {
                switch (ingredient) {
                    case "TopBun" :
                        key++;
                        return <img src={TopBun} alt={'TopBun'} key={key}/>;
                    case "Tomato" :
                        key++;
                        return <img src={Tomato} alt={'Tomato'} key={key}/>;
                    case "Cheese" :
                        key++;
                        return <img src={Cheese} alt={'Cheese'} key={key}/>;
                    case "MeatPatty" :
                        key++;
                        return <img src={MeatPatty} alt={'MeatPatty'} key={key}/>;
                    case "BottomBun" :
                        key++;
                        return <img src={BottomBun} alt={'BottomBun'} key={key}/>;
                    default :
                        return null;
                }
            });
        }

        return (
            <div className={"burger"}>{burgerElements}</div>
        )
    }
}

export default Burger
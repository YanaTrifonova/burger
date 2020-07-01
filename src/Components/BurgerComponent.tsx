import {BurgerState} from "../State/BurgerState";
import React from "react";
import {CombinedState, Store} from "redux";
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import TopBun from '../Images/TopBun.png';
import Tomato from '../Images/Tomato.png';
import Cheese from '../Images/Cheese.png';
import MeatPatty from '../Images/MeatPatty.png';
import BottomBun from '../Images/BottomBun.png'

import './BurgerComponents.css'

interface Props {
    store: Store<CombinedState<{ burger: BurgerState }>, AddIngredientAction>
}

const Burgerx: React.FunctionComponent<Props> = ({store}) => {
    const burgerParts = store.getState().burger.ingredients.toArray().map((ingredient) => {
        switch (ingredient) {
            case "TopBun" :
                return <img src={TopBun} alt={'TopBun'} key={TopBun}/>;
            case "Tomato" :
                return <img src={Tomato} alt={'Tomato'} key={Tomato}/>;
            case "Cheese" :
                return <img src={Cheese} alt={'Cheese'} key={Cheese}/>;
            case "MeatPatty" :
                return <img src={MeatPatty} alt={'MeatPatty'} key={MeatPatty}/>;
            case "BottomBun" :
                return <img src={BottomBun} alt={'BottomBun'} key={BottomBun}/>;
            default :
                return <h1>Empty</h1>;
        }
    })

    return (
        <div className={"burger"}>{burgerParts}</div>
    )
}

export default Burgerx
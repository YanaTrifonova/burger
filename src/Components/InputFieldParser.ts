// import {addIngredient, AddIngredientAction} from "../Actions/AddIngridientAction";
// import {Dispatch} from "react";
//, dispatch : Dispatch<AddIngredientAction>
const inputFieldParser = (input: string) : string[] => {
    // TODO try to use regexp
    let ingridients : string[] = [];
    while (input !== '') {
        switch (input.charAt(0)) {
            case 'b' :
                console.log('Tomato');
                input = input.slice(1, input.length);
                ingridients.push('Tomato');
                break;
            case 'u' :
                console.log('Cheese');
                input = input.slice(1, input.length);
                ingridients.push('Cheese');
                break;
            case 'r':
                console.log('MeatPatty');
                input = input.slice(1, input.length);
                ingridients.push('MeatPatty');
                break;
            default :
                if (input.length < 3) {
                    input = input.slice(1, input.length);
                    break;
                }
                const threeSymbolsIngredient = input.slice(0, 3);
                switch (threeSymbolsIngredient) {
                    case 'ham' :
                        console.log('Top');
                        input = input.slice(3, input.length);
                        ingridients.push('TopBun');
                        break;
                    case 'ger' :
                        console.log('Bottom');
                        input = input.slice(3, input.length);
                        ingridients.push('BottomBun');
                        break;
                    default :
                        input = input.slice(1, input.length);
                        break;
                }
        }
    }
    return ingridients;
}

export default inputFieldParser;
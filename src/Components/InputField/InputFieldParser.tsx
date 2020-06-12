export default class InputFieldParser {

    static parse(input: string) {
        // TODO try to use regexp

        console.log('my Input', input);
        while (input !== '') {
            switch (input.charAt(0)) {
                case 'b' :
                    console.log('tomato');
                    input = input.slice(1, input.length);
                    break;
                case 'u' :
                    console.log('Cheese');
                    input = input.slice(1, input.length);
                    break;
                case 'r':
                    console.log('MeatPatty');
                    input = input.slice(1, input.length);
                    break;
                default :
                    if (input.length < 3) {
                        input = input.slice(1, input.length);
                        break;
                    }
                    const threeSymbolsIngredient = input.slice(0, 3);
                    switch (threeSymbolsIngredient) {
                        case 'ham' :
                            console.log('top');
                            input = input.slice(3, input.length);
                            break;
                        case 'ger' :
                            console.log('bottom');
                            input = input.slice(3, input.length);
                            break;
                        default :
                            input = input.slice(1, input.length);
                            break;
                    }
            }
        }
    }
}
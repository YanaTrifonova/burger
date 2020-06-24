import * as React from 'react';
import inputFieldParser from "../Components/InputFieldParser";

interface Props {
    value: string;
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
        inputFieldParser(event.currentTarget.value.toLocaleLowerCase());

    };

    render(): JSX.Element {
        return (
            <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}/>
        );
    }
}

export default InputField;
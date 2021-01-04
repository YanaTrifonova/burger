import React from "react";
import './FancyLoggerComponent.css';
import {CombinedState, Store} from "redux";
import {FancyLoggerState} from "../State/FancyLoggerState";
import ReduxState from "../Store/Store";
import {BurgerState} from "../State/BurgerState";
import {AddIngredientAction} from "../Actions/AddIngridientAction";
import {RemoveAllIngredientsAction} from "../Actions/RemoveAllIngredientsAction";
import {InputWatcherAction} from "../Actions/InputWatcherAction";

interface Props {
    store: Store<CombinedState<{ fancyLogger: FancyLoggerState }>, InputWatcherAction> | Store<CombinedState<{ burger: BurgerState }>, AddIngredientAction | RemoveAllIngredientsAction>,
}

interface State {
    text: string[];
}

class FancyLogger extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {text: ReduxState.getState().fancyLogger.text};
        this.props.store.subscribe(this.fetchState.bind(this));
    }

    fetchState = () => {
        this.setState({text: ReduxState.getState().fancyLogger.text})
    }

    render(): JSX.Element {
        let logger = this.state.text.map((t) => {
            return t;
        });

        return (
            <code id="fancyLogger">
                <h1>Logger</h1>
                <p className="text"><span className="time">{new Date(Date.now()).toUTCString()}</span>Hello user!</p>
                <p className="text"><span className="time">{new Date(Date.now()).toUTCString()}</span>This app is based
                    on this meme
                    video from Youtube</p>
                <iframe
                    title="youtubeVideo"
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/dPgKf2EcEK0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen><span className="time">{new Date(Date.now()).toUTCString()}</span>
                </iframe>
                {logger.length !== 0
                    ? logger.map((l) => {
                        return <p className="text"><span className="time">{new Date(Date.now()).toUTCString()}</span>{l}
                        </p>
                    })
                    : null}
            </code>
        )
    }
}

export default FancyLogger;
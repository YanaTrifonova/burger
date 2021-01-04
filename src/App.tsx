import React from 'react';
import {Provider} from 'react-redux'

import InputField from './Components/InputField';
import Burger from './Components/BurgerComponent';
import FancyLogger from './Components/FancyLoggerComponent';

import './App.css';
import store from "./Store/Store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <div className="left-container">
                    <InputField value={''} store={store} text={['']}/>
                    <Burger store={store}/>
                </div>
                <div className="right-container">
                    <FancyLogger store={store}/>
                </div>
            </Provider>
        </div>
    );
}

export default App;

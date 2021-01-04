import React from 'react';
import {Provider} from 'react-redux'

import InputField from './Components/InputField';
import Burger from './Components/BurgerComponent';

import './App.css';
import store from "./Store/Store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <InputField value={''} store={store}/>
                <Burger store={store}/>
            </Provider>
        </div>
    );
}

export default App;

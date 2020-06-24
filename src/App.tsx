import React from 'react';

import InputField from './Components/InputField';
import Burger from './Components/BurgerComponent';

import './App.css';
import configureStore from "./Store/Store";

function App() {
    const store = configureStore();
    return (
        <div className="App">
            <InputField value={'Burger'}/>
            <Burger store={store}></Burger>
        </div>
    );
}

export default App;

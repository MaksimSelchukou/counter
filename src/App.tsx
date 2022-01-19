import React from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingsCounter} from "./components/settingCounter/SettingsCounter";

function App() {
    return (
        <div className="App">
            <Counter/>
            <SettingsCounter/>
        </div>
    );
}

export default App;

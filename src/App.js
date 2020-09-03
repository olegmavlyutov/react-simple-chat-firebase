import React from 'react';
import './App.css';
import ChatMessages from './components/ChatMessages'
import InputMessage from './components/InputMessage'

function App() {
    return (
        <div className="App">

            <ChatMessages/>
            <InputMessage/>

        </div>
    );
}

export default App;

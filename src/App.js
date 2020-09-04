import React from 'react';
import './App.css';
import ChatMessages from './components/ChatMessages';
import InputMessage from './components/InputMessage';

/**
 *
 * @returns App компонента выводит компоненты ChatMessages и InputMessage
 * @returns ChatMessages - выводит сами сообщения
 * @returns InputMessage - отображает строку для ввода сообщения
 * @constructor
 */
function App() {
    return (
        <div className="App">

            <ChatMessages/>
            <InputMessage/>

        </div>
    );
}

export default App;

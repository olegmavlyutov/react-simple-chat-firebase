import React, {useEffect} from 'react';
import axios from 'axios';

const ChatMessages = () => {
    const messagesLoading = async () => {
        try {
            const response = await axios.get('https://react-simple-chat-firebase.firebaseio.com/messages.json')
            // const list = Object.values(response.data).map(message => messagesList.push(message))
            return (Object.values(response.data))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const list = [];
        messagesLoading().then(e => e.map(i => list.push(i)))
        console.log(list)
    })

    return (
        <div>

            <li>
                {/*<button onClick={messagesLoading}>Load</button>*/}
                {/*{console.log()}*/}
            </li>

        </div>
    );
}

export default ChatMessages;
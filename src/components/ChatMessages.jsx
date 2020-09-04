import React, {useEffect, useState} from 'react';
import axios from '../axios/axios.config';

const ChatMessages = () => {
    const [messages, setMessages] = useState([]);

    const messagesLoading = async () => {
        try {
            const response = await axios.get('/messages.json')
            return Object.values(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const rerender = setInterval(() => {
            messagesLoading()
                .then(e => setMessages(e))
        }, 1000);
        return () => clearInterval(rerender);
    }, [])

    return (
        <div>

            {
                (messages)
                    ? messages.map(message => (
                        <li>{message}</li>))
                    : <p>Нет сообщений</p>
            }

        </div>
    );
}

export default ChatMessages;
import React, {useState} from 'react';
import axios from 'axios';

const InputMessage = () => {
    const [value, setValue] = useState('');

    const onSubmit = async event => {
        if (event.key === 'Enter') {
            setValue(event.target.value);
            console.log('Ушло в value', value);

            try {
                const response = await axios.post('https://react-simple-chat-firebase.firebaseio.com/messages.json', value)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }

            setValue('');
        }
    }

    return (
        <div>
            <input
            type='text'
            placeholder='Введите сообщение для отправки'
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyPress={onSubmit}
            />
        </div>
    );
}

export default InputMessage;
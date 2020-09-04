import React, {useState} from 'react';
import axios from '../axios/axios.config';

const InputMessage = () => {
    const [value, setValue] = useState('');

    const onSubmit = async event => {
        if (event.key === 'Enter') {
            setValue(event.target.value);

            try {
                await axios.post('/messages.json', JSON.stringify(value))
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
                placeholder='Введите сообщение'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    );
}

export default InputMessage;
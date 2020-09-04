import React, {useState} from 'react';
import axios from '../axios/axios.config';

/**
 *
 * @returns InputMessage служит для принятия сообщения от пользователя и отправки его на сервер
 * @constructor
 */
const InputMessage = () => {

    /**
     * @param value - хранит сообщение, введённое пользователем
     * @param setValue - изменяет содержимое value
     *
     * По умолчанию в хуке хранится пустая строка, меняется функцией onSubmit через setValue
     */
    const [value, setValue] = useState('');

    /**
     *
     * @param event - в свойстве key хранится текущая нажатая клавиша
     * Если нажата клавиша Enter, значение value передаётся на сервер через axios POST-запрос
     * (описание ниже)
     *
     * @returns {Promise<void>} - через библиотеку axios методом POST отправляем содержимое
     * переменной value в формате JSON на сервер в таблицу messages
     *
     * После успешной отправки, очищаем переменную value, чтобы строка ввода стала пустой
     */
    const onSubmit = async event => {
        if (event.key === 'Enter') {
            setValue(event.target.value);

            try {
                await axios.post('/messages.json', JSON.stringify(value));
                setValue('');
            } catch (e) {
                console.log(e);
            }
        }
    }

    /**
     * @returns input для ввода сообщения - изменение строки ввода меняет содержимое value в нашем state
     *
     * Нажатие клавиши вызывает метод onSubmit, который выполняет отправку на сервер,
     * если была нажата клавиша Enter
     */
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
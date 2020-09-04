import React, {useEffect, useState} from 'react';
import axios from '../axios/axios.config';

/**
 *
 * @returns ChatMessages - выводит сообщения чата, загружая их с сервера
 * @constructor
 */
const ChatMessages = () => {
    /**
     * @param messages - хранит в себе сообщения чата (по умолчанию пустой массив)
     * @param setMessages - изменяет messages, например, при загрузке с сервера новых сообщений
     */
    const [messages, setMessages] = useState([]);

    /**
     *
     * @returns {Promise<unknown[]|null>} response - получает данные с сервера через библиотеку
     * axios методом GET из таблицы messages в формате JSON
     *
     * @returns messagesLoading возвращает массив текущих сообщений с сервера,
     * если в БД не пусто и сообщения есть
     * (содержимое response не undefined и не null)
     * Преобразует их в новый массив (через Object.values), который содержит только сами тексты сообщений
     */
    const messagesLoading = async () => {
        try {
            const response = await axios.get('/messages.json')
            return (response.data !== null && response.data !== undefined)
                ? Object.values(response.data)
                : null
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * @param rerender - каждую секунду запускает метод messagesLoading (через setInterval),
     * это нужно для перерисовки страницы и отображения новых сообщений
     *
     * Получив результат выполнения промиса из messagesLoading, устанавливаем этот результат
     * через setMessages в messages - таким образом, в messages попадает массив сообщений с сервера
     *
     * После выполнения rerender, очищаем из памяти setInterval вызвав clearInterval
     *
     */
    useEffect(() => {
        const rerender = setInterval(() => {
            messagesLoading()
                .then(e => setMessages(e));
        }, 1000);
        return () => clearInterval(rerender);
    }, [])

    /**
     * @returns методом map пробегаем по массиву messages и каждый элемент выводим в теге <li>
     *
     * Если messages пуст, то выводится сообщение "Нет сообщений" в теге <p>
     */
    return (
        <div>

            {
                (messages)
                    ? messages.map((message, index) => (
                        <li key={index}>{message}</li>))
                    : <p>Нет сообщений</p>
            }

        </div>
    );
}

export default ChatMessages;
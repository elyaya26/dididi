// import React from 'react';
// import {showError, showInfo, showSuccess} from "../utils/alert";
//
// const HomePage = () => {
//
//     function success () {
//         showSuccess('Элтуран', 'Че опоздал?')
//     }
//
//     function error () {
//         showError('Ну там дела появились')
//     }
//
//     function info () {
//         showInfo('SHOW INFO')
//     }
//
//     return (
//         <div>
//             <button onClick={success}>Успешная кнопка</button>
//             <button onClick={error}>Неуспешная кнопка</button>
//             <button onClick={info}>INFO</button>
//         </div>
//     );
// };
//
// export default HomePage;






import React, {useState} from 'react';
import axios from "axios";
import {showError, showSuccess} from "../utils/alert";

const HomePage = () => {

    const [data, setData] = useState({
        message: ''
    })

    console.log(data)

    async function sendMessage () {
        try {
            const response = await axios.post('https://codify-graduation-project.vercel.app/send-message', data)
            console.log(response)
            showSuccess('Успешно выполнено', 'Сообщение отправлено, ожидайте звонка!')
        } catch (e) {
            if (e.response.status === 404) {
                showError('Код ошибка 404', 'Сервер временно недоступен')
            } else {
                showError('Произошла непредвиденная ошибка', 'Обратитесь к разработчикам.')
            }
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Введите Ваш текст'
                onChange={ (event) => setData({message: event.target.value}) }/>
            <input type="button" value='Отправить' onClick={sendMessage}/>
        </div>
    );
};

export default HomePage;

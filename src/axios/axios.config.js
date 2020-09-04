import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-simple-chat-firebase.firebaseio.com/'
})
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-40215.firebaseio.com/'
});

export default instance;
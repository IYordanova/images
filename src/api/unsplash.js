import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 136514a4539fd7c90fe4b976675aea7c5e137aa17e3b6ba68f4dadd568ffdc18'
    }
});
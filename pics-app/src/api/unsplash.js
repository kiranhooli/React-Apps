import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Z5FXxTx2W8BFouz5iACOscMm59ElB_4zIFjo4nvGdvA'
    }
})
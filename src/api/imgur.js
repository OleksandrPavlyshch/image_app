import qs from 'qs';
import axios from 'axios';


const BASE_URL = 'https://api.imgur.com/';
const CLIENT_ID  = '4ccefaa2da33d60';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(queryString)}`

    },
    getAccountData(username) {
        return axios.get(`${BASE_URL}3/account/${username}`, {
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}`
            }
        })
    },
    fetchImages(token) {
        console.log(token)
        return axios.get(`${BASE_URL}3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

    }
};
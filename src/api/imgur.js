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
        return axios.get(`${BASE_URL}3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    },
    uploadImages(token, images) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('name', image.name);
            formData.append('title', image.name);

            return axios.post(`${BASE_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        });

        return Promise.all(promises);
    },

    getImageData(token, id) {
        return axios.get(`${BASE_URL}3/image/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    },
    updateImage(token, image) {
        const formData = new FormData();
        formData.append('title', image.title);
        formData.append('description', image.description);
        return axios.post(`${BASE_URL}3/image/${image.id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

};
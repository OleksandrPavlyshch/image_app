import qs from 'qs';


const BASE_URL = 'https://api.imgur.com/';
const CLIENT_ID  = '4ccefaa2da33d60';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(queryString)}`

    }
};
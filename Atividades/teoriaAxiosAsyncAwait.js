import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {

            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);

        } catch{
            console.log('Erro na API')
        }
    }
}

Api.getUserInfo('gui1998');
Api.getUserInfo('gui1998sdadasdasdsad');
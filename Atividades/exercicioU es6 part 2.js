import axios from 'axios';
// Funão delay aciona o .then após 1s
const delay = (param) => new Promise(resolve => setTimeout(() => {resolve(param)}, 1000));

const umPorSegundo = async () => {
    console.log(await delay('1s'));
    console.log(await delay('2s'));
    console.log(await delay('3s'));
}

umPorSegundo();


//  import axios from 'axios';

class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);

        } catch{
            console.log('Erro na API')
        }
    }
}
Api.getUserFromGithub('diego3g');
Api.getUserFromGithub('diego3g124123');

// import axios from 'axios';
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);                
        } catch (error) {
            console.log('Deu pau')
        }
    }
}

Github.getRepositories('gui1998/web2');
Github.getRepositories('rocketseat/dslkvmskv');

// import axios from 'axios';

class Api2 {

    static async buscaUsuario(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch (error) {
            console.log('Deu pau')

        }
    }
}
Api2.buscaUsuario('gui1998s');
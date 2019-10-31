import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.querySelector('#repo-form');
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.querySelector('#repo-list');
        this.bodyEl = document.body;
        this.registrerHandlers();
    }

    registrerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('img');
            //loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');
           loadingEl.style.marginTop = '0';
           loadingEl.style.marginLeft = '-150px';
            // loadingEl.style.fontSize='30px';
           // loadingEl.height='100px';
            //loadingEl.width='100px';
           loadingEl.style.left='50%';
            loadingEl.style.height='300px';
            loadingEl.style.width='300px';
            loadingEl.style.position='absolute';
            loadingEl.setAttribute('src','https://ftramontina.com/video/images/loader-gif-transparent-animated-7.gif');

            this.bodyEl.appendChild(loadingEl);
        } else {
           document.querySelector('#loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) {
            return;
        }

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';
            this.render();
        } catch{
            alert(`O repositorio ${this.inputEl.value} não existe!`)
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl);
        });
    }
}


new App();
/* var minhaPromise = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github .com/users/gui1998');
        xhr.send(null);
        
        xhr.onreadystatechange=function(){
            if(xhr.readyState === 4){
                if (xhr.status===200) {
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisicao');
                }
            }
        }
    });
}
 */
axios.get('https://api.github.com/users/gui1998')
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
        
    });
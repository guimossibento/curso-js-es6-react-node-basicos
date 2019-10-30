const minhaPromisse = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('Ok')}, 2000);
});
/*
minhaPromisse().then(response =>{
    console.log(response);
});*/

 const executaPromise = async () => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}
 


executaPromise();